import { Types } from 'mongoose';

export interface IComment {
  blog: Types.ObjectId;
  user: Types.ObjectId;
  //   name: string;
  commentedAt: Date;
  content: string;
}
