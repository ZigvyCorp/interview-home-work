import { IQueryParams } from 'src/common/interface/common.interface';

export interface ICreatePosts {
  title: string;
  content: string;
  ownerId: string;
  tags?: string[];
}

export interface IUpdatePosts extends Omit<ICreatePosts, 'ownerId'> {
  id: string;
  userId: string;
}

export interface IGetAllCommentByPostId extends IQueryParams {
  postId: string;
}
