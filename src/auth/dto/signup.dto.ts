import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  isNotEmpty,
} from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter correct email address' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}
