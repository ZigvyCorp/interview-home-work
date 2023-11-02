// src/actions/types.ts

import { POST_ACTIONS } from "../../constants/actions.constants";
import { PostList } from "../../models/posts.model";

export const fetchPosts = () => ({
  type: POST_ACTIONS.FETCH_POSTS,
});

export const fetchPostsSuccess = (data: PostList) => ({
  type: POST_ACTIONS.FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchPostsFailure = (error: Error) => ({
  type: POST_ACTIONS.FETCH_POSTS_FAILURE,
  payload: error,
});
