import { SET_POSTS } from '../constants/postConstants.js';

export const getPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case SET_POSTS:
      const { posts } = action;
      return { ...state, posts };
    default:
      return state;
  }
};
