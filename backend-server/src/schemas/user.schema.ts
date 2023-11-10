import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ default: '' })
  firstName: string;
  @Prop({ default: '' })
  lastName: string;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({ enum: ['User', 'Admin'], default: 'User' })
  role: string;
  @Prop()
  photo: string;
  @Prop({ enum: ['Active', 'Deactivated'], default: 'Active' })
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
