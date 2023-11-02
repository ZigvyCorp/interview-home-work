import * as ACTION_TYPE from "./actionTypes";

export interface IUser {
  _id: string;
  username: string;
  password: string;
  name: string;
  dob: string;
}

export interface UsersState {
  pending: boolean;
  posts: IUser[];
  error: string | null;
}

export interface UserState {
  pending: boolean;
  user: IUser;
  error: string | null;
}

export interface GetUserSuccessPayload {
  user: IUser;
}

export interface GetUserFailurePayload {
  error: string;
}

export interface GetUserRequest {
  type: typeof ACTION_TYPE.GET_USER_REQUEST;
  id: string;
}

export interface GetUserSuccess {
  type: typeof ACTION_TYPE.GET_USER_SUCCESS;
  payload: GetUserSuccessPayload;
}

export interface GetUserFailure {
  type: typeof ACTION_TYPE.GET_USER_FAILURE;
  payload: GetUserFailurePayload;
}

export type UserActions = GetUserRequest | GetUserSuccess | GetUserFailure;
