import { postIdTypes, postTypes } from "../actions-types/postTypes";

import {
  FetchPostIdFailure,
  FetchPostIdFailurePayload,
  FetchPostIdRequest,
  FetchPostIdSuccess,
  FetchPostIdSuccessPayload,
} from "../types/typesId";

export const fetchPostIdRequest = (payload: {
  postId: number;
}): FetchPostIdRequest => ({
  type: postIdTypes.FETCH_POST_ID_REQUEST,
  payload,
});

export const fetchPostIdSuccess = (
  payload: FetchPostIdSuccessPayload
): FetchPostIdSuccess => ({
  type: postIdTypes.FETCH_POST_ID_SUCCESS,
  payload,
});

export const fetchPostIdFailure = (
  payload: FetchPostIdFailurePayload
): FetchPostIdFailure => ({
  type: postIdTypes.FETCH_POST_ID_FAILURE,
  payload,
});
