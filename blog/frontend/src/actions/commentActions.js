import {
  COMMENTS_FETCH_FAIL,
  COMMENTS_FETCH_REQUEST,
  COMMENTS_FETCH_SUCCESS,
} from '../constants/commentConstants.js';

export const getComments = () => ({
  type: COMMENTS_FETCH_REQUEST,
});

export const setComments = (comments) => ({
  type: COMMENTS_FETCH_SUCCESS,
  payload: comments,
});

export const getCommentsFailed = (error) => ({
  type: COMMENTS_FETCH_FAIL,
  payload: error,
});
