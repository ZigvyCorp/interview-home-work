// reducers.js

import { FETCH_POSTS_SUCCESS, SET_SEARCH_KEYWORD } from "./types";

const initialState = {
  posts: [],
  searchKeyword: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload.newPosts],
      };
    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload.keyword,
      };
    default:
      return state;
  }
};

export default rootReducer;
