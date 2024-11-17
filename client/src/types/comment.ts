import { IUser } from "./user";

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: IUser;
}

export interface ICreateComment {
  content: string;
}
