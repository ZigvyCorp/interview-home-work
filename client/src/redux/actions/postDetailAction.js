import {
    GET_POST_DETAIL,
    FETCH_POST_DETAIL_SUCCESS,
    FETCH_POST_DETAIL_FAILURE,
  } from "../constants/index";

  export const getPostDetail = (id) => ({
    type: GET_POST_DETAIL,
    payload: {
      id,
    },
  });

  export const getPostDetailSuccess = (data) => ({
    type: FETCH_POST_DETAIL_SUCCESS,
    payload: data,
  });

  export const getPostDetailFailures = (error) => ({
    type: FETCH_POST_DETAIL_FAILURE,
    payload: error,
  });