import actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  post: [],
  count: 0,
  loading: false,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts || [],
        count: action.count || 0,
        loading: action.loading || false,
      };
    case actionTypes.GET_POSTS_BY_ID:
      return {
        ...state,
        post: action.post || [],
        loading: action.loading || false,
      };
    default:
      return state;
  }
};

export default postReducer;
