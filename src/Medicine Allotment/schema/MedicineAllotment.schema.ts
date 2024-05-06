import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsISO8601, IsNumber, IsString } from 'class-validator';

@Schema()
export class MedicineAllotment {
  @Prop()
  @IsString()
  Usertype: string;

  @Prop()
  @IsString()
  User: string;

  @Prop()
  @IsString()
  Medicines: string;

  @Prop()
  @IsString()
  Injuryreason: string;

  @Prop()
  @IsString()
  Initial:string;

  @Prop()
  @IsNumber()
  Issuetime: Number;

  @Prop()
  @IsISO8601()
  ExpireDate: Date;
}

export const MedicineAllotmentSchema =
  SchemaFactory.createForClass(MedicineAllotment);
