import { SchemaFactory } from '@nestjs/mongoose';
import { Combo } from '../Schema/combo.schema';
import { IsISO8601, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class UpdateComboDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  price: number;

  @IsOptional()
  @IsString()
  fileurl: string;

  @IsOptional()
  @IsString()
  stars: number;

  @IsOptional()
  @IsString()
  @IsISO8601()
  expiredate: Date;
}
export default UpdateComboDto;
