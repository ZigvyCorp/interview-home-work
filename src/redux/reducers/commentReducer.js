import {
  GET_COMMENTS_ERRORS,
  GET_COMMENTS_FETCH,
  GET_COMMENTS_SUCCESS,
} from "../constants/commentConstant";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_FETCH:
      return { ...state, loading: true };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments,
      };

    case GET_COMMENTS_ERRORS:
      return { ...state, loading: false, error: action.message };

    default:
      return { ...state };
  }
};

export default commentReducer;
