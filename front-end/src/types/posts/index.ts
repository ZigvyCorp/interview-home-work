import * as ACTION_TYPE from "./actionTypes";

export interface IPost {
  id: string;
  owner: string;
  title: string;
  content: string;
  tags: string[];
}

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface GetPostsSuccessPayload {
  posts: IPost[];
}

export interface GetPostsFailurePayload {
  error: string;
}

export interface GetPostsRequest {
  type: typeof ACTION_TYPE.GET_POSTS_REQUEST;
}

export interface GetPostsSuccess {
  type: typeof ACTION_TYPE.GET_POSTS_SUCCESS;
  payload: GetPostsSuccessPayload;
}

export interface GetPostsFailure {
  type: typeof ACTION_TYPE.GET_POSTS_FAILURE;
  payload: GetPostsFailurePayload;
}

export type PostsActions = GetPostsRequest | GetPostsSuccess | GetPostsFailure;
