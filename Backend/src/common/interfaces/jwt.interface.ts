import { UserEntity } from '../entities';

export interface JwtSignToken {
  user: UserEntity;
  expiresIn: string;
}
