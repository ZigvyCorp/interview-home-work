import _ from 'lodash';
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
      // Temporary solution, and it's bad!!!
      const newPayload = [];

      const stringPayload = state.comments.map((comment) =>
        JSON.stringify(comment)
      );

      console.log(stringPayload);

      for (let comment of action.payload) {
        if (!stringPayload.includes(JSON.stringify(comment))) {
          newPayload.push(comment);
        }
      }

      return { comments: [...state.comments, ...newPayload] };
    case COMMENTS_BY_POST_ID_FETCH_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
