import { GET_POSTS, SET_POSTS } from '../constants/postConstants.js';

export const getPosts = (keyword = '', pageNumber = '') => ({
  type: GET_POSTS,
  payload: { keyword, pageNumber },
});

export const setPosts = (data) => ({
  type: SET_POSTS,
  payload: data,
});
