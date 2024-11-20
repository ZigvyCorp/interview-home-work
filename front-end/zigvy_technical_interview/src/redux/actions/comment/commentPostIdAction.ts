import { commentPostIdTypes } from "../../actions-types/commentTypes";
import {
  FetchCommentPostIdFailure,
  FetchCommentPostIdFailurePayload,
  FetchCommentPostIdRequest,
  FetchCommentPostIdSuccess,
  FetchCommentPostIdSuccessPayload,
} from "../../types/comment/commentPostIdType";

export const fetchCommentPostIdRequest = (payload: {
  postId: number;
}): FetchCommentPostIdRequest => ({
  type: commentPostIdTypes.FETCH_COMMENT_POST_ID_REQUEST,
  payload,
});

export const fetchCommentPostIdSuccess = (
  payload: FetchCommentPostIdSuccessPayload
): FetchCommentPostIdSuccess => ({
  type: commentPostIdTypes.FETCH_COMMENT_POST_ID_SUCCESS,
  payload,
});

export const fetchCommentPostIdFailure = (
  payload: FetchCommentPostIdFailurePayload
): FetchCommentPostIdFailure => ({
  type: commentPostIdTypes.FETCH_COMMENT_POST_ID_FAILURE,
  payload,
});
