import * as ACTION_TYPE from "../../types/posts/actionTypes";
import * as TYPE from "../../types/posts";

export const getPostsRequest = (): TYPE.GetPostsRequest => ({
  type: ACTION_TYPE.GET_POSTS_REQUEST,
});

export const getPostsSuccess = (
  payload: TYPE.GetPostsSuccessPayload
): TYPE.GetPostsSuccess => ({
  type: ACTION_TYPE.GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFailure = (
  payload: TYPE.GetPostsFailurePayload
): TYPE.GetPostsFailure => ({
  type: ACTION_TYPE.GET_POSTS_FAILURE,
  payload,
});
