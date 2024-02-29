import { User } from "../User/types";

export interface Comment {
  commentId: number;
  postId: number
  content: string;
  createdAt: string;
  updatedAt: string
  // User: User;
  name: string
  isMyComment: boolean
}


interface CommentData {
  [postId: string]: Comment;
}

interface Comments {
  [postId: string]: CommentData;
}

export interface CommentResponse {
  comments: Comment[]
}

export interface CommentState {
  // count: number
  // comments: any;
  loading: boolean;
  comments: Record<string, Comment[]>;
}

export interface CreateComment {
  content: string
}

export interface CreateCommentResponse {
  commentId: number;
  postId: number
  content: string;
  createdAt: string;
}
