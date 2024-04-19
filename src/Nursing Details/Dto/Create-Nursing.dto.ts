import { IsEnum, IsNotEmpty } from 'class-validator';

export enum Nursing {
  Allergies_ = 'Yes',
  Medication_ = 'No',
}

export class CreateNursingDto {
  @IsNotEmpty()
  StudentName: string;

  @IsNotEmpty()
  @IsEnum(Nursing)
  Allergies: string;

  @IsNotEmpty()
  @IsEnum(Nursing)
  Medication: string;
}
