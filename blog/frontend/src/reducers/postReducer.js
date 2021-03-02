import { SET_POSTS } from '../constants/postConstants.js';

export const getPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { posts: action.payload };
    default:
      return state;
  }
};
