// Utilities
import { Moment } from 'moment';


export interface Post {
  id: number;
  date: Moment;
  body: string;
  title: string;
  userId: number;
}

export interface ManagePosts {
  posts: Post[];

  totalPage: number;
  pageNumber: number;
  keyword: string | null;
}

export interface UserPost extends Post {
  userId: number;
  username: string;
}