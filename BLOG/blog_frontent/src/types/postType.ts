import { CommentType } from "./commentType";

export interface PostType {
  _id: string;
  user: any,
  title: string;
  body: string;
  updatedAt: string;
  createdAt: string;
  comments: CommentType[];
}

export interface PostListState { 
  totalPages: number
  posts: PostType[],
  currentPage: number
}

export interface PostListStatusType extends PostListState{  
  loading: boolean;
}

export interface PostStatusType {
  post: PostType | null,
  loading: boolean;
} 