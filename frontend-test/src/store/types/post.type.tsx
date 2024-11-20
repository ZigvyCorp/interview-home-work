export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"

export interface FetchPostsAction { type: typeof FETCH_POSTS, payload: any }
export interface FetchPostsSuccessAction { type: typeof FETCH_POSTS_SUCCESS, payload: any }

export type PostActionTypes = FetchPostsAction | FetchPostsSuccessAction;
