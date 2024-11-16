import { IQueryParams } from "./common";
import { IUser } from "./user";

export interface IPosts {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  owner?: IUser;
}

export interface IGetAllCommentByPostsId extends IQueryParams {
  postId: string;
}

export interface IGetAllPosts extends IQueryParams {}
