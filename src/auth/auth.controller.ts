import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signup.dto";
import { AuthUser } from "./schema/user.schema";
import { LoginDto } from "./dto/Login.dto";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}

    @Post('/signup')
    SignUp(@Body() signUpDto:SignUpDto):Promise<{token:string}> {
        return this.authService.signUp(signUpDto);
    }

    @Post('/login')
    login(@Body() loginDto:LoginDto):Promise<{token:string}> {
      return this.authService.login(loginDto);
    }

    
}