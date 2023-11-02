import * as ACTION_TYPE from "./actionTypes";

export interface IPost {
  _id: string;
  owner: {
    _id: string;
    name: string;
  };
  title: string;
  content: string;
  tags: string[];
  created_at: string;
}

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
  size: number;
}

export interface GetPostsSuccessPayload {
  posts: IPost[];
  size: number;
}

export interface GetPostsFailurePayload {
  error: string;
}

export interface GetPostsRequest {
  type: typeof ACTION_TYPE.GET_POSTS_REQUEST;
  pageNumber: Number;
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
