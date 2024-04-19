import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum CategoryArea {
  Fast_FOOD = 'fast Food',
  CAFE = 'cafe',
  FINE_DINNING = 'Fine Dinning',
}
// }
// @Schema()
// export class Category {
//   @Prop()
//   category: string;
// }

@Schema()
export class Category {
  @Prop()
  category: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
