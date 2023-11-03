import {
  GET_COMMENTS,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants/index";

export const getComments = (id) => ({
  type: GET_COMMENTS,
  payload: {
    id,
  },
});

export const getCommentsSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const getCommentsFailures = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
