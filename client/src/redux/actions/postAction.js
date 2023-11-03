import {
  GET_POSTS,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants/index";

export const getPosts = (title,page,perpage) => ({
  type: GET_POSTS,
  payload: {
    title,
    page,
    perpage
  },
});

export const getPostsSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const getPostsFailures = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
