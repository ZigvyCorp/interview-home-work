import { IComment } from "./comment";
import { IUser } from "./user";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IPostWithRelations extends IPost {
  user?: IUser;
  comments?: IComment[];
}
