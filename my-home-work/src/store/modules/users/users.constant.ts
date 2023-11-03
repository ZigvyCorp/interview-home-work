import { IUser } from "src/constant/resource.constant";

export interface IUserState {
  firstLoad?: boolean;
  loading?: boolean;
  data: IUser[];
  error: null | string;
}
export enum Types {
  SET_USERS = "[USERS] SET_USERS",
  LOAD_USERS = "[USERS] LOAD_USERS",
  SET_USERS_ERROR = "[USERS] SET_USERS_ERROR",
}
export interface LoadUsersAction {
  type: typeof Types.LOAD_USERS;
}
export interface SetUsersAction {
  type: typeof Types.SET_USERS;
  payload: { users: IUser[] };
}
export interface SetUsersErrorAction {
  type: typeof Types.SET_USERS_ERROR;
  payload: { msg: string };
}
export type Actions = LoadUsersAction | SetUsersAction | SetUsersErrorAction;
