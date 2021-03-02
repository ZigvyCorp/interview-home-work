import {
  COMMENTS_BY_POST_ID_FETCH_FAIL,
  COMMENTS_BY_POST_ID_FETCH_REQUEST,
  COMMENTS_BY_POST_ID_FETCH_SUCCESS,
  COMMENTS_FETCH_FAIL,
  COMMENTS_FETCH_REQUEST,
  COMMENTS_FETCH_SUCCESS,
} from '../constants/commentConstants.js';

// Fetch all comments
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

// Fetch comments by blog id
export const getCommentsByPostId = (postId) => ({
  type: COMMENTS_BY_POST_ID_FETCH_REQUEST,
  payload: { postId },
});

export const setCommentsByPostId = (comments) => ({
  type: COMMENTS_BY_POST_ID_FETCH_SUCCESS,
  payload: comments,
});

export const getCommentsByPostIdFailed = (error) => ({
  type: COMMENTS_BY_POST_ID_FETCH_FAIL,
  payload: error,
});
