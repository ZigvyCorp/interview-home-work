import { IUser } from "./user";

export interface ILogin {
  username: string;
  password: string;
}

export interface IAuth {
  access_token: string;
  user: IUser;
}
