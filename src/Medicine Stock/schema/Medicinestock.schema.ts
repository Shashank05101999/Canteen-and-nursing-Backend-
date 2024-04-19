import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsString } from 'class-validator';

@Schema()
export class MedicineStock {
  @Prop()
  @IsString()
  MedicineName: string;

  @Prop()
  @IsString()
  Description: String;

  @Prop()
  @IsString()
  Allergy: string;

  @Prop()
  @IsNumber()
  Stock: Number;

  @Prop()
  ExpireDate: Date;
}

export const MedicineSchema = SchemaFactory.createForClass(MedicineStock);
