import { type ITimeStamp } from './common';
import { type IUser } from './user';

export interface IComment {
  id: number;
  body: string;
  type: string;
  user: IUser;
  timestamp: ITimeStamp;
}
