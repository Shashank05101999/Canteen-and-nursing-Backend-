import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsDefined,
  IsDate,
  IsISO8601,
} from 'class-validator';
export class CreateRestaurantDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly price: number;

  @IsISO8601()
  readonly expiredate: Date;

  @IsString()
  readonly category: string;

  @IsNumber()
  readonly stars: number;

  @IsString()
  readonly fileurl: string; // image
}

// //
// category:
// price:
// expiredate:
// description:
// name:
//  stars:
// image:
