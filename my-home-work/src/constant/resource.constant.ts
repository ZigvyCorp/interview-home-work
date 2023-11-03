export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  createdAt: Date;
}
export interface IUser {
  id: number;
  username: string;
  name: string;
}
export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export enum RESOURCES {
  posts = "POSTS",
  comments = "COMMENTS",
  USERS = "USERS",
}
