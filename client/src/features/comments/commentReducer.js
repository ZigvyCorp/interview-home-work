import {
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
} from "./actionTypes";

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case FETCH_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
