import { Types } from 'mongoose';

export interface IBlog {
  author: Types.ObjectId;
  title: string;
  content: string;
  postedAt: Date;
  tags: string[];
  commentCount?: number;
  comments: Array<Types.ObjectId>;
}
