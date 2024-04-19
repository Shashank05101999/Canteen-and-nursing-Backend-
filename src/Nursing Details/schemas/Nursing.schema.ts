import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Nursing {
  @Prop()
  StudentName: string;

  @Prop()
  Allergies: string;

  @Prop()
  Medication: string;
}

export const NursingSchema = SchemaFactory.createForClass(Nursing);
