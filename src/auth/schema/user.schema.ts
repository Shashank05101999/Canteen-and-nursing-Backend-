import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}
@Schema()
export class AuthUser extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email enterd'] })
  email: string;

  @Prop({ select: false })
  password: string;

  @Prop({
    enum: UserRoles,
    default: UserRoles.USER,
  })
  @Prop()
  role: UserRoles;
}

export const UserSchema = SchemaFactory.createForClass(AuthUser);
