import * as ActionTypes from "../actionTypes";

const initialState = {
  posts: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.data.posts,
        loading: false,
      };
    }
    case ActionTypes.GET_TOTAL_POSTS_SUCCESS: {
      return {
        ...state,
        total: action.data.total
      };
    }
    case ActionTypes.UPDATE_LOADING: {
      return {
        ...state,
        loading: action.data.loading,
      };
    }
    default: {
      return state;
    }
  }
};
