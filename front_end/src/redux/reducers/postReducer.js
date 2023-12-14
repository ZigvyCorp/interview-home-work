// postReducer.js

import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POST_BY_ID_FAILURE,
  GET_POST_BY_ID_REQUEST,
  GET_POST_BY_ID_SUCCESS,
  SEARCH_POSTS_FAILURE,
  SEARCH_POSTS_REQUEST,
  SEARCH_POSTS_SUCCESS,
} from "../actions/postActions";

const initialState = {
  loading: false,
  posts: [],
  searchResults: [],
  error: null,
  post: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    /**Get posts */
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    /**Search post */
    case SEARCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload,
      };
    case SEARCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    /**Post detail */
    case GET_POST_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case GET_POST_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectPosts = (state) => state.posts.posts;
export const selectSearchResults = (state) => state.posts.searchResults;
export const selectPostById = (state) => state.posts.post;
export const selectLoading = (state) => state.posts.loading;
export const selectError = (state) => state.posts.error;
export default postReducer;
