import * as ACTION_TYPE from "../../types/comments/actionTypes";
import * as TYPE from "../../types/comments";

export const getCommentsByPostIdRequest = (
  id: string
): TYPE.GetCommentsRequest => ({
  type: ACTION_TYPE.GET_COMMENTS_REQUEST,
  id: id,
});

export const getCommentsSuccess = (
  payload: TYPE.GetCommentsSuccessPayload
): TYPE.GetCommentsSuccess => ({
  type: ACTION_TYPE.GET_COMMENTS_SUCCESS,
  payload,
});

export const getCommentsFailure = (
  payload: TYPE.GetCommentsFailurePayload
): TYPE.GetCommentsFailure => ({
  type: ACTION_TYPE.GET_COMMENTS_FAILURE,
  payload,
});
