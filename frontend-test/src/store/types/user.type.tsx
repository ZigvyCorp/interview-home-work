export const FETCH_USERS = "FETCH_USERS"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"

export interface FetchUsersAction { type: typeof FETCH_USERS, payload: any }
export interface FetchUsersSuccessAction { type: typeof FETCH_USERS_SUCCESS, payload: any }

export type UserActionTypes = FetchUsersAction | FetchUsersSuccessAction;
