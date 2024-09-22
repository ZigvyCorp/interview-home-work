import { Post } from '../posts/post';
import { User } from '../users/user';

export type CommentType = {
  id: number;
  user: User;
  post: Post;
  content: string;
  createdAt: number;
};
