import { IBaseModel } from '.';
import { ICommentModel } from './comments';

export interface IPostModel extends IBaseModel {
  author: string;
  title: string;
  content: string;
  comments: IComments;
}

export interface IComments {
  list: Array<ICommentModel>;
  count: number;
}
