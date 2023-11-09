import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { Post, User } from '@schemas';

const { ObjectId } = mongoose.Schema.Types;

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ required: true })
  content: string;
  @Prop({ type: ObjectId, ref: 'User', required: true })
  user: User;
  @Prop({ type: ObjectId, ref: 'Post', required: true })
  post: Post;
  @Prop({ type: ObjectId, ref: 'Comment' })
  parent: Comment;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
