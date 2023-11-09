import { userActionTypes } from "../../actions-types/userActionTypes";

import {
  FetchUserIdFailure,
  FetchUserIdFailurePayload,
  FetchUserIdRequest,
  FetchUserIdSuccess,
  FetchUserIdSuccessPayload,
} from "../../types/user/userTypes";

export const fetchUserIdRequest = (payload: {
  userId: number;
}): FetchUserIdRequest => ({
  type: userActionTypes.FETCH_USER_ID_REQUEST,
  payload,
});

export const fetchUserIdSuccess = (
  payload: FetchUserIdSuccessPayload
): FetchUserIdSuccess => ({
  type: userActionTypes.FETCH_USER_ID_SUCCESS,
  payload,
});

export const fetchUserIdFailure = (
  payload: FetchUserIdFailurePayload
): FetchUserIdFailure => ({
  type: userActionTypes.FETCH_USER_ID_FAILURE,
  payload,
});
