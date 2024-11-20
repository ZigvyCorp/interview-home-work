import { Model, Document } from 'mongoose';
import { QueryResult } from '../paginate/paginate';

export interface IComment {
  postId: string;
  name: string;
  email: string;
  body: string;
}

export interface ICommentDoc extends IComment, Document {}

export interface ICommentModel extends Model<ICommentDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type UpdateComment = Partial<IComment>;

export type NewCreateComment = IComment;
