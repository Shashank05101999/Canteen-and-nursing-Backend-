import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter correct email address' })
  readonly email: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}
console.log("test");
