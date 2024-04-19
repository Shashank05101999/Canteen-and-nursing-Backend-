import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum Nursing {
  Allergies_ = 'Yes',
  Medication_ = 'No',
}

export class UpdateNursingDto {
  @IsOptional()
  @IsString()
  StudentName: string;

  @IsOptional()
  @IsEnum(Nursing)
  Allergies: string;

  @IsOptional()
  @IsString()
  @IsEnum(Nursing)
  Medication: string;
}
