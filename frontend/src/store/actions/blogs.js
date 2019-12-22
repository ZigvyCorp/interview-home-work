import * as actionTypes from "./actionTypes";

export const initFetchPosts = (limit) => ({
  type: actionTypes.INIT_FETCH_POSTS,
  limit
})

export const initFetchPostsSuccess = (posts) => ({
  type: actionTypes.INIT_FETCH_POSTS_SUCCESS,
  posts
})

export const fetchPosts = (page, limit) => ({
  type: actionTypes.FETCH_POSTS,
  page,
  limit
})

export const fetchPostsStart = (limit) => ({ 
  type: actionTypes.FETCH_POSTS_START,
  limit 
})

export const fetchPostsSuccess = (posts) => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  posts
})

export const fetchPostsFail = (error) => ({
  type: actionTypes.FETCH_POSTS_FAIL,
  error
})

export const filterPostTitle = (value) => ({
  type: actionTypes.FILTER_POST_TITLE,
  value
})