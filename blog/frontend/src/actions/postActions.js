import { GET_POSTS, SET_POSTS } from '../constants/postConstants.js';

export const getPosts = (keyword = '') => ({
  type: GET_POSTS,
  payload: { keyword },
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});
