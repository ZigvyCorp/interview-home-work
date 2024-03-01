import { UserPost } from "./user";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  listComments: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
}
