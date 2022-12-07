import {
  GET_POST_ERRORS,
  GET_POST_FETCH,
  GET_POST_SUCCESS,
} from "../constants/postConstant";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_FETCH:
      return { ...state, loading: true };

    case GET_POST_SUCCESS:
      return { ...state, loading: false, posts: action.posts };

    case GET_POST_ERRORS:
      return { ...state, loading: false, error: action.message };

    default:
      return { ...state };
  }
};

export default postReducer;
