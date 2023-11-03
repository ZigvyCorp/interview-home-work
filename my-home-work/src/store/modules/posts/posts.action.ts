import {
  Types,
  SetPostsAction,
  LoadPostsAction,
  SetPostsErrorAction,
  SetPostsParams,
  AddPostsAction,
} from "./posts.constant";
import { IPost } from "src/constant/resource.constant";
export function setPosts(posts: IPost[]): SetPostsAction {
  return { type: Types.SET_POSTS, payload: { posts } };
}
export function addPosts(posts: IPost[]): AddPostsAction {
  return { type: Types.ADD_POSTS, payload: { posts } };
}
export function loadPosts(): LoadPostsAction {
  return { type: Types.LOAD_POSTS };
}
export function setPostsParams(page: number, search: string): SetPostsParams {
  return { type: Types.SET_POSTS_PARAMS, payload: { page, search } };
}

export function setError(msg: string): SetPostsErrorAction {
  return { type: Types.SET_POSTS_ERROR, payload: { msg } };
}
