import * as ACTION_TYPE from "./actionTypes";

export interface IComment {
  _id: string;
  owner: string;
  post: string;
  content: string;
}

export interface CommentsState {
  pending: boolean;
  comments: IComment[];
  error: string | null;
}

export interface GetCommentsSuccessPayload {
  comments: IComment[];
}

export interface GetCommentsFailurePayload {
  error: string;
}

export interface GetCommentsRequest {
  type: typeof ACTION_TYPE.GET_COMMENTS_REQUEST;
  id: string;
}

export interface GetCommentsSuccess {
  type: typeof ACTION_TYPE.GET_COMMENTS_SUCCESS;
  payload: GetCommentsSuccessPayload;
}

export interface GetCommentsFailure {
  type: typeof ACTION_TYPE.GET_COMMENTS_FAILURE;
  payload: GetCommentsFailurePayload;
}

export type CommentsActions =
  | GetCommentsRequest
  | GetCommentsSuccess
  | GetCommentsFailure;
