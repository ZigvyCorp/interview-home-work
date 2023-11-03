import {
  Types,
  SetUsersAction,
  LoadUsersAction,
  SetUsersErrorAction,
} from "./users.constant";
import { IUser } from "src/constant/resource.constant";
export function setUsers(users: IUser[]): SetUsersAction {
  return { type: Types.SET_USERS, payload: { users } };
}
export function loadUsers(): LoadUsersAction {
  return { type: Types.LOAD_USERS };
}
export function setUserError(msg: string): SetUsersErrorAction {
  return { type: Types.SET_USERS_ERROR, payload: { msg } };
}
