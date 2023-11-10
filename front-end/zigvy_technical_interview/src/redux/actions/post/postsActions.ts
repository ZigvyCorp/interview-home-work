import { postTypes } from "../../actions-types/postTypes";
import {
  FetchPostFailure,
  FetchPostFailurePayload,
  FetchPostRequest,
  FetchPostSuccess,
  FetchPostSuccessPayload,
} from "../../types/post/types";

export const fetchPostRequest = (): FetchPostRequest => ({
  type: postTypes.FETCH_POST_REQUEST,
});

export const fetchPostSuccess = (
  payload: FetchPostSuccessPayload
): FetchPostSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostFailure = (
  payload: FetchPostFailurePayload
): FetchPostFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload,
});
