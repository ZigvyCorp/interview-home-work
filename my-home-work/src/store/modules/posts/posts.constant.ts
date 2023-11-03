import { IPost } from "src/constant/resource.constant";

export interface IPostsState {
  firstLoad?: boolean;
  loading?: boolean;
  data: IPost[];
  error: null | string;
  params?: {
    page: number;
    limit: number;
    search: string;
  };
}
export enum Types {
  SET_POSTS = "[POSTS] SET_POSTS",
  LOAD_POSTS = "[POSTS] LOAD_POSTS",
  ADD_POSTS = "[POSTS] ADD_POSTS",
  SET_POSTS_ERROR = "[POSTS] SET_POSTS_ERROR",
  SET_POSTS_PARAMS = "[POSTS] SET_POSTS_PARAMS",
}
export interface LoadPostsAction {
  type: typeof Types.LOAD_POSTS;
}

export interface SetPostsAction {
  type: typeof Types.SET_POSTS;
  payload: { posts: IPost[] };
}
export interface AddPostsAction {
  type: typeof Types.ADD_POSTS;
  payload: { posts: IPost[] };
}
export interface SetPostsErrorAction {
  type: typeof Types.SET_POSTS_ERROR;
  payload: { msg: string };
}
export interface SetPostsParams {
  type: typeof Types.SET_POSTS_PARAMS;
  payload: { page: number; search: string };
}
export type Actions =
  | LoadPostsAction
  | SetPostsAction
  | SetPostsErrorAction
  | SetPostsParams
  | AddPostsAction;
