import {
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
} from "./actionTypes";

export const fetchCommentRequest = (apiEndpoint) => ({
  type: FETCH_COMMENT_REQUEST,
  payload: { apiEndpoint },
});

export const fetchCommentSuccess = (comment) => ({
  type: FETCH_COMMENT_SUCCESS,
  payload: comment,
});

export const fetchCommentFailure = (error) => ({
  type: FETCH_COMMENT_FAILURE,
  payload: error,
});
