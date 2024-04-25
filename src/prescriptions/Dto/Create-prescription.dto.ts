import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum medication {
  Medication = 'Yes',
  Medication_ = 'No',
}

export class CreatePrescriptionDto {
  @IsString()
  StudentName: string;

  @IsString()
  Daigonsis: string;

  @IsString()
  @IsEnum(medication)
  Medication: string;

  @IsString()
  Remark: string;
}
