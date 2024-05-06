import { SchemaFactory } from '@nestjs/mongoose';
import { Combo } from '../Schema/combo.schema';
import { IsISO8601, IsNotEmpty } from 'class-validator';

export class CreateComboDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  fileurl: string;

  @IsNotEmpty()
  stars: number;

  @IsNotEmpty()
  @IsISO8601()
  expiredate: Date;
}
