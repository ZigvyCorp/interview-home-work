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
