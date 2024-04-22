import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  isNotEmpty,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  readonly name: string;

  @IsEmail({}, { message: 'please enter correct email address' })
  readonly email: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}
