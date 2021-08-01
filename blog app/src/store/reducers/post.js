import * as actionTypes from "../actions/actionType";

const initialState = {
  posts: [],
  comments: [],
  loadedPost: null,
  loadedCmt: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      const post = action.results;
      return {
        ...state,
        posts: state.posts.concat(post),
      };

    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.results,
      };

    case actionTypes.FETCH_LOADED_POST:
      return {
        ...state,
        loadedPost: action.results,
      };

    case actionTypes.FETCH_LOADED_CMTS:
      return {
        ...state,
        loadedCmt: action.results,
      };

    default:
      return state;
  }
};

export default reducer;
