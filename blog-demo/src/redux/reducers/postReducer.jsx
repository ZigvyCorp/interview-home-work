import {
  GET__POSTS,
  POST__DETAIL,
  POST__SEARCH,
} from "../../types/postComponent";

const stateDefault = {
  postStore: [],
  postDetail: {},
  postSearch: "",
};

export const postReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET__POSTS: {
      state.postStore = [...action.postStore];
      return { ...state };
    }

    case POST__DETAIL: {
      state.postDetail = action.postDetail;
      return { ...state };
    }

    case POST__SEARCH: {
      state.postSearch = action.keyword;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
