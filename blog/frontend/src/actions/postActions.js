import {
  POSTS_FETCH_FAIL,
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
} from '../constants/postConstants.js';

export const getPosts = (keyword = '', pageNumber = '') => ({
  type: POSTS_FETCH_REQUEST,
  payload: { keyword, pageNumber },
});

export const setPosts = (data) => ({
  type: POSTS_FETCH_SUCCESS,
  payload: data,
});

export const getPostsFailed = (error) => ({
  type: POSTS_FETCH_FAIL,
  payload: error,
});
