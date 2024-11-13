import { User } from '../users/user.entity';
import { Post } from './post.entity';

export type PostType = Omit<Post, 'user'> & {
  user: Omit<User, 'hashPassword'>;
};
