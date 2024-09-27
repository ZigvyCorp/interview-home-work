import { type ITimeStamp } from './common';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  timestamp: ITimeStamp;
}
