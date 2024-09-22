import { User } from './user.entity';

export type UserType = Omit<User, 'hashPassword'>;
