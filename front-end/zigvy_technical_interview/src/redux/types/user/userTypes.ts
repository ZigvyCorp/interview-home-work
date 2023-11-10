import { UserModel } from "../../../model/type";
import { userActionTypes } from "../../actions-types/userActionTypes";

export interface UserIdState {
  loadingUserId: boolean;
  user: UserModel;
  errorUserId: string | null;
}

export interface FetchUserIdSuccessPayload {
  user: UserModel;
}

export interface FetchUserIdFailurePayload {
  errorUserId: string;
}

export interface FetchUserIdRequestPayload {
  userId: number;
}

export interface FetchUserIdRequest {
  type: typeof userActionTypes.FETCH_USER_ID_REQUEST;
  payload: FetchUserIdRequestPayload;
}

export interface FetchUserIdSuccess {
  type: typeof userActionTypes.FETCH_USER_ID_SUCCESS;
  payload: FetchUserIdSuccessPayload;
}

export interface FetchUserIdFailure {
  type: typeof userActionTypes.FETCH_USER_ID_FAILURE;
  payload: FetchUserIdFailurePayload;
}

export type UserIdAction =
  | FetchUserIdRequest
  | FetchUserIdSuccess
  | FetchUserIdFailure;
