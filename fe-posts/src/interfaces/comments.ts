import { IBaseModel } from '.';

export interface ICommentModel extends IBaseModel {
  postId: string;
  name: string;
  email: string;
  body: string;
  count: number;
}
