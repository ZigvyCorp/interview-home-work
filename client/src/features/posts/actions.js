import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./actionTypes";

export const fetchPostRequest = (apiEndpoint) => ({
  type: FETCH_POST_REQUEST,
  payload: { apiEndpoint },
});

export const fetchPostSuccess = (post) => ({
  type: FETCH_POST_SUCCESS,
  payload: post,
});

export const fetchPostFailure = (error) => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});
