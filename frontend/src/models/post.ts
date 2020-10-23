import { Comment } from "./comment";
import { User } from "./user";

export class Post {
  _id = "";
  title = "";
  content = "";
  tags: string[] = [];
  author: string | User = "";
  createdAt = "";
  updatedAt = "";
  likes?: string[] | User[] = [];
  comments?: Comment[] | string[] = [];
}
