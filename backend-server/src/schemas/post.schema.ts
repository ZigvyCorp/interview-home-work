import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { Comment, User } from '@schemas';

const { ObjectId } = mongoose.Schema.Types;

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  content: string;
  @Prop()
  overview: string;
  @Prop({ type: ObjectId, ref: 'User', required: true })
  author: User;
  @Prop({ type: [ObjectId], ref: 'Comment', default: [] })
  comments: Comment[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
