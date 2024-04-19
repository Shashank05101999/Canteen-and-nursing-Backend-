import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Combo {
  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  fileurl: string;

  @Prop()
  stars: number;

  @Prop()
  expiredate: Date;
}

export const ComboSchema = SchemaFactory.createForClass(Combo);
