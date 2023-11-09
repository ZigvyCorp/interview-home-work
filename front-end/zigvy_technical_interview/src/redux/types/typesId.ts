import { Post } from "../../model/type";
import { postIdTypes } from "../actions-types/postTypes";

export interface PostIdState {
  loading: boolean;
  post: Post;
  error: string | null;
}

export interface FetchPostIdSuccessPayload {
  post: Post;
}

export interface FetchPostIdFailurePayload {
  error: string;
}

export interface FetchPostIdRequestPayload {
  postId: number;
}

export interface FetchPostIdRequest {
  type: typeof postIdTypes.FETCH_POST_ID_REQUEST;
  payload: FetchPostIdRequestPayload;
}

export interface FetchPostIdSuccess {
  type: typeof postIdTypes.FETCH_POST_ID_SUCCESS;
  payload: FetchPostIdSuccessPayload;
}

export interface FetchPostIdFailure {
  type: typeof postIdTypes.FETCH_POST_ID_FAILURE;
  payload: FetchPostIdFailurePayload;
}

export type PostIdAction =
  | FetchPostIdRequest
  | FetchPostIdSuccess
  | FetchPostIdFailure;
