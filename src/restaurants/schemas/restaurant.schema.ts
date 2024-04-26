import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsISO8601, IsNumber, IsString } from 'class-validator';

export enum Category {
  COMBO_FOOD = 'Veg',
  CAFE = 'Combo',
  COMBO_VEG_NONVEG = 'Non-Veg',
  veg_ = 'veg',
  combo_ = 'combo',
  non_veg_ = 'non-veg',
}

@Schema()
export class Restaurant {
  @Prop()
  @IsString()
  name: string;

  @Prop()
  @IsString()
  description: string;

  @Prop()
  @IsISO8601()
  expiredate: Date;

  @Prop()
  @IsString()
  category: string;

  @Prop()
  @IsString()
  fileurl: string;

  @Prop()
  @IsNumber()
  price: Number;

  @Prop()
  @IsNumber()
  stars: Number;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
