import {
  COMMENTS_FETCH_FAIL,
  COMMENTS_FETCH_SUCCESS,
} from '../constants/commentConstants.js';

export const getCommentsReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case COMMENTS_FETCH_SUCCESS:
      return { ...state, comment: action.payload };
    case COMMENTS_FETCH_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
