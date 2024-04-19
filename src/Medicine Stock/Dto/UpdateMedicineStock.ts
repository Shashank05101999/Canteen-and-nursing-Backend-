import {
  IsDate,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMedicineStockDto {
  @IsOptional()
  @IsString()
  MedicineName: string;

  @IsOptional()
  @IsString()
  Description: string;

  @IsOptional()
  @IsString()
  Allergy: string;

  @IsOptional()
  @IsNumber()
  Stock: Number;

  @IsOptional()
  @IsISO8601()
  ExpireDate: Date;
}
