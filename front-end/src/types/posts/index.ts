import * as ACTION_TYPE from "./actionTypes";

export interface IPostService {
  title: string;
  content: string;
  tags: string;
  owner: string;
}

export interface IPost {
  _id: string;
  owner: {
    _id: string;
    name: string;
  };
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
}

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
  size: number;
  firstInit: boolean;
}

// Returned payload

export interface GetPostsSuccessPayload {
  posts: IPost[];
  size: number;
}

export interface GetCreatedPostPayload {
  post: IPost;
}

export interface GetPostsFailurePayload {
  error: string;
}

export interface GetEditedPostPayload {
  post: IPost;
}

export interface GetDeletedPostPayload {
  post: IPost;
}
export interface GetSearchPostPayload {
  posts: IPost[];
  size: number;
}

// Request

export interface CreatePostRequest {
  type: typeof ACTION_TYPE.ADD_POST_REQUEST;
  data: IPostService;
}

export interface EditPostRequest {
  type: typeof ACTION_TYPE.EDIT_POST_REQUEST;
  data: IPostService;
  id: string;
}

export interface GetPostsRequest {
  type: typeof ACTION_TYPE.GET_POSTS_REQUEST;
  pageNumber: Number;
}

export interface DeletePostRequest {
  type: typeof ACTION_TYPE.DELETE_POST_REQUEST;
  id: string;
}

export interface SearchPostsRequest {
  type: typeof ACTION_TYPE.SEARCH_POSTS_REQUEST;
  pageNumber: number;
  title: string;
}

// Returned data

export interface GetPostsSuccess {
  type: typeof ACTION_TYPE.GET_POSTS_SUCCESS;
  payload: GetPostsSuccessPayload;
}

export interface GetCreatedPost {
  type: typeof ACTION_TYPE.ADDED_POST;
  payload: GetCreatedPostPayload;
}

export interface GetDeletedPost {
  type: typeof ACTION_TYPE.DELETED_POST;
  payload: GetDeletedPostPayload;
}

export interface GetPostsFailure {
  type: typeof ACTION_TYPE.GET_POSTS_FAILURE;
  payload: GetPostsFailurePayload;
}

export interface GetEditedPost {
  type: typeof ACTION_TYPE.EDITED_POST;
  payload: GetEditedPostPayload;
}

export interface GetSearchedPosts {
  type: typeof ACTION_TYPE.SEARCHED_POSTS;
  payload: GetSearchPostPayload;
}

export type PostsActions =
  | GetPostsRequest
  | GetPostsSuccess
  | GetPostsFailure
  | CreatePostRequest
  | GetCreatedPost
  | DeletePostRequest
  | GetDeletedPost
  | EditPostRequest
  | GetEditedPost
  | SearchPostsRequest
  | GetSearchedPosts;
