import {
  COMMENTS_BY_POST_ID_FETCH_FAIL,
  COMMENTS_BY_POST_ID_FETCH_SUCCESS,
  COMMENTS_FETCH_FAIL,
  COMMENTS_FETCH_SUCCESS,
} from '../constants/commentConstants.js';

export const getCommentsReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case COMMENTS_FETCH_SUCCESS:
      return { comments: action.payload };
    case COMMENTS_FETCH_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getCommentsByPostIdReducer = (
  state = { comments: [] },
  action
) => {
  switch (action.type) {
    case COMMENTS_BY_POST_ID_FETCH_SUCCESS:
      return { comments: [...state.comments, ...action.payload] };
    case COMMENTS_BY_POST_ID_FETCH_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
