export interface IBlog {
  id: string;
  author: string | IUser;
  title: string;
  content: string;
  postedAt: Date;
  tags: string[];
  commentCount?: number;
  comments: Array<string | IComment>;
}

export interface IComment {
  id: string;
  blog: string | IBlog;
  user: string | IUser;
  commentedAt: Date;
  content: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface IPaging {
  total: number;
  skip: number;
  pages: number;
  limit: number;
}

export interface IRequestPaging {
  skip: number;
  limit: number;
}

export interface BaseAction<T> {
  type: string;
  payload: T;
}

export interface ReturnResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

export interface ReturnListResponse<T> {
  data: ResponseListPayload<T>;
  success: boolean;
  message: string;
}

export type ResponseListPayload<T> = {
  list: T[];
  paging: IPaging;
};
