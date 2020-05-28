import * as actionTypes from "../utils/action-types";

const initialState = {
  post: null,
  updatedPost: null,
  posts: [],
  totalPosts: 0,
};

const postState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: [],
      };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: data,
      };
    case actionTypes.FETCH_POSTS_FAILED:
      return {
        ...state,
        posts: [],
      };
    case actionTypes.FETCH_POST:
      return {
        ...state,
        post: null,
      };
    case actionTypes.FETCH_UPDATED_POST_SUCCESS:
      return {
        ...state,
        updatedPost: data,
      };
    case actionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        post: data,
      };
    case actionTypes.FETCH_POST_FAILED:
      return {
        ...state,
        post: null,
      };
    case actionTypes.SET_TOTAL_POSTS:
      return {
        ...state,
        totalPosts: data
      }
    default:
      return state;
  }
};

export default postState;
