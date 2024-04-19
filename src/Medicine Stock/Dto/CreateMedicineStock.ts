import { SchemaFactory } from '@nestjs/mongoose';
import {
  IsDate,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateMedicineStockDto {
  @IsNotEmpty()
  @IsString()
  MedicineName: string;

  @IsNotEmpty()
  @IsString()
  Description: string;

  @IsNotEmpty()
  @IsString()
  Allergy: string;

  @IsNotEmpty()
  @IsNumber()
  Stock: Number;

  @IsNotEmpty()
  @IsISO8601()
  ExpireDate: Date;
}
