import * as ACTION_TYPE from "../../types/users/actionTypes";
import * as TYPE from "../../types/users";

export const getUserByIdRequest = (id: string): TYPE.GetUserRequest => ({
  type: ACTION_TYPE.GET_USER_REQUEST,
  id: id,
});

export const getUserSuccess = (
  payload: TYPE.GetUserSuccessPayload
): TYPE.GetUserSuccess => ({
  type: ACTION_TYPE.GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = (
  payload: TYPE.GetUserFailurePayload
): TYPE.GetUserFailure => ({
  type: ACTION_TYPE.GET_USER_FAILURE,
  payload,
});
