/**
 * @file postReducer.js
 * @description Redux reducer for handling post-related actions.
 * @module reducers/postReducer
 */

import { FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POST_FAILURE } from '../actions/postActions';

const initialState = {
  posts: [],
  post: null,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case FETCH_POSTS_FAILURE:
    case FETCH_POST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default postReducer;