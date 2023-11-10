import { Post } from "../../../model/type";
import { postTypes } from "../../actions-types/postTypes";

export interface PostsState {
  loading: boolean;
  posts: Post[];
  error: string | null;
}

export interface FetchPostSuccessPayload {
  posts: Post[];
}

export interface FetchPostFailurePayload {
  error: string;
}

export interface FetchPostRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
}

export interface FetchPostSuccess {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostSuccessPayload;
}

export interface FetchPostFailure {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostFailurePayload;
}

export type PostsAction =
  | FetchPostRequest
  | FetchPostSuccess
  | FetchPostFailure;
