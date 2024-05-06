import {
  IsDate,
  IsDefined,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class updateRestaurantDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNumber()
  @IsOptional()
  readonly price: number;

  @IsISO8601()
  @IsOptional()
  readonly expiredate: Date;

  @IsString()
  @IsOptional()
  readonly category: string;

  @IsNumber()
  @IsOptional()
  readonly stars: number;

  @IsString()
  @IsOptional()
  readonly fileurl: string; // image
}
