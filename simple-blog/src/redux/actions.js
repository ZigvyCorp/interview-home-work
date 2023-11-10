// actions.js

import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  LOAD_MORE_POSTS_REQUEST,
  SET_SEARCH_KEYWORD,
} from "./types";

export const fetchPostsRequest = (page) => ({
  type: FETCH_POSTS_REQUEST,
  payload: { page },
});

export const fetchPostsSuccess = (newPosts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { newPosts },
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error },
});

export const loadMorePostsRequest = (page) => ({
  type: LOAD_MORE_POSTS_REQUEST,
  payload: { page },
});

export const setSearchKeyword = (keyword) => ({
  type: SET_SEARCH_KEYWORD,
  payload: { keyword },
});
