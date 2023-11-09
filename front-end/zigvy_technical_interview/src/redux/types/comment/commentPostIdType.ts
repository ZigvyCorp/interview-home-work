import { CommentModel } from "../../../model/type";
import { commentPostIdTypes } from "../../actions-types/commentTypes";

export interface CommentPostIdState {
  loadingComment: boolean;
  comments: CommentModel[];
  errorComment: string | null;
}

export interface FetchCommentPostIdSuccessPayload {
  comments: CommentModel[];
}

export interface FetchCommentPostIdFailurePayload {
  errorComment: string;
}

export interface FetchCommentPostIdRequestPayload {
  postId: number;
}

export interface FetchCommentPostIdRequest {
  type: typeof commentPostIdTypes.FETCH_COMMENT_POST_ID_REQUEST;
  payload: FetchCommentPostIdRequestPayload;
}

export interface FetchCommentPostIdSuccess {
  type: typeof commentPostIdTypes.FETCH_COMMENT_POST_ID_SUCCESS;
  payload: FetchCommentPostIdSuccessPayload;
}

export interface FetchCommentPostIdFailure {
  type: typeof commentPostIdTypes.FETCH_COMMENT_POST_ID_FAILURE;
  payload: FetchCommentPostIdFailurePayload;
}

export type CommentPostIdAction =
  | FetchCommentPostIdRequest
  | FetchCommentPostIdSuccess
  | FetchCommentPostIdFailure;
