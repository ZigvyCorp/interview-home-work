// src/reducers/posts.js

import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from "../actions/post";

const initialState = {
  data: [],
  loading: false,
  error: null,
  pagination: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: true, error: null };

    case GET_POSTS_SUCCESS: {
      const { posts, pagination } = action?.payload || {};
      return {
        ...state,
        loading: false,
        data: posts,
        pagination: pagination || {},
        error: null,
      };
    }

    case GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
