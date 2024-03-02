import { rootReducer } from "../redux/Reducer/reducers.ts";

export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  token?: string;
}
export type RootStore = ReturnType<typeof rootReducer>;
export interface IComment {
  _id?: string;
  user: IUser;
  blog_id: string;
  blog_user_id: string;
  content: string;
  reply_comment: IComment[];
  reply_user?: IUser;
  comment_root?: string;
  createdAt: string;
}
export interface IBlog {
  _id?: string;
  author?: string;
  user?: IUser;
  title: string;
  content: string;
  createdAt: string;
}
