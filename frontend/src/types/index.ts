export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  created_at: number;
  page: number;
};

export type Comment = {
  post: Post;
  user: User;
  id: number;
  name: string;
  email: string;
  body: string;
  createdAt?: string;
};
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
};

export type AddCommentForm = {
  id?: number;
  postId?: number;
  userId?: number;
  body?: string;
  name?: string;
};

export type Color =
  | "magenta"
  | "red"
  | "volcano"
  | "orange"
  | "gold"
  | "lime"
  | "green"
  | "cyan"
  | "blue"
  | "geekblue"
  | "purple";
