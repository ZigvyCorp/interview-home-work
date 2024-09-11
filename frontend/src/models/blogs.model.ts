export interface IBlog {
  _id: string;
  user: IUser;
  id: number;
  title: string;
  body: string;
  comments: IComment[];
}

export interface IUser {
  id: string;
  name: string;
}

export interface IComment {
  id: string;

  post: string;
  user: IUser;
  content: string;
}
