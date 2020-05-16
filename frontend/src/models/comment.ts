import { Post } from "./post";
import { User } from "./user";

export class Comment {
  _id = "";
  post?: Post | string = "";
  content = "";
  commentedBy: User | string = "";
  likes: User[] | string[] = [];
  createdAt = "";
  updatedAt = "";
}
