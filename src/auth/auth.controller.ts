import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signup.dto";
import { User } from "./schema/user.schema";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}

    @Post('/signup')
    SignUp(@Body() signUpDto:SignUpDto):Promise<User>{
        return this.authService.signUp(signUpDto);
    }
}