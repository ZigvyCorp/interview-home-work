import { GET_POSTS, SET_POSTS } from '../constants/postConstants.js';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts,
});
