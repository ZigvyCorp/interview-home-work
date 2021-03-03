import {
  POSTS_FETCH_FAIL,
  POSTS_FETCH_SUCCESS,
} from '../constants/postConstants.js';

export const getPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return {
        posts: action.payload.posts,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case POSTS_FETCH_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
