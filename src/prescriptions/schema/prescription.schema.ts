import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';

@Schema()
export class Prescription {
  @Prop()
  @IsString()
  StudentName: string;

  @Prop()
  @IsString()
  Daigonsis: string;

  @Prop()
  @IsString()
  Medication: string;

  @Prop()
  @IsString()
  Remark: string;
}

export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);
