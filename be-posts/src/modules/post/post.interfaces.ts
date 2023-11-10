import { Model, Document } from 'mongoose';
import { QueryResult } from '../paginate/paginate';

export interface IPost {
  author: string;
  title: string;
  content: string;
  comments: {
    count: number;
  };
}

export interface IPostDoc extends IPost, Document {}

export interface IPostModel extends Model<IPostDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type UpdatePost = Partial<IPost>;

export type NewCreatePost = Omit<IPost, 'comments'>;
