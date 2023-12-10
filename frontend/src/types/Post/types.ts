import { Comment } from "../Comment/types";
import { User } from "../User/types";

export interface Post {
  postId: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  isMyPost: boolean;
  User: User;
  Comments: Comment[];
  commentCount: number;
}

export interface FetchPost {
  totalItem: number
  totalPages: number
  posts: Post[],
  page: number
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  page: number
  isLoadMore: boolean
  totalItem: number
  totalPages: number
}

export interface CreatePost {
  postId: number;
  title: string;
  content: string;
  tags: string[];
}

export type PostResponse = Omit<CreatePost, "postId">;
