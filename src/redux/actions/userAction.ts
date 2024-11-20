import { User, UserAction } from "../types";

export const loginRequest = (user: User): UserAction => ({
  type: "LOGIN_REQUEST",
  payload: user,
});

export const loginSuccess = (user: User): UserAction => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (error: string): UserAction => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
