import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/signup.dto';
import { promises } from 'fs';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/Login.dto';
import APIfeatures from 'src/utils/apifeatures.utils';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token:string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password,10);
    try {
      const user = await this.userModel.create({
        name,
        email,
        password: hashedPassword,
      });
      const token = await APIfeatures.assignJwtToken(user._id, user.email,user.name, this.jwtService);

      return { token };
    } catch (error) {
      //handle duplicate email
      if (error.code === 11000) {
        throw new ConflictException('Duplicate  Email enterned');
      }
    }
  }

  //login
  async login(LoginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = LoginDto;

    const user = await this.userModel.findOne({ email }).select('+password');

    if (!user) {
      throw new UnauthorizedException('invalid email');
    }

    //check if password is correct or not
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('invalid password');
    }
    const token = await APIfeatures.assignJwtToken(user._id,user.email,user.name, this.jwtService);

    return { token };
    console.log(user);
  }
}
