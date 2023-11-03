import { FetchCommentsAction } from "../types/comment.type"

export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_USERS = "FETCH_USERS"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_COMMENTS = "FETCH_COMMENTS"
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS"

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPostsSuccess = (data: any) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchUsersSuccess = (data: any) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchCommentsOfPost = (payload: any): FetchCommentsAction => ({
  type: FETCH_COMMENTS,
  payload: payload
});

export const fetchCommentsOfPostSuccess = (data: any) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: data,
});
