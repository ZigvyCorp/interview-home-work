import * as actionTypes from "../utils/action-types";

const initialState = {
  comment: null,
  comments: [],
};

const commentState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        comment: data
      };
    case actionTypes.FETCH_COMMENTS:
      return {
        ...state,
        comments: [],
      };
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: data,
      };
    case actionTypes.FETCH_COMMENTS_FAILED:
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};

export default commentState;
