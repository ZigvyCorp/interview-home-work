import { BaseAction } from "./BaseAction";
import { CommentActionType } from "../actionTypes";
import { Comments } from "../../API/Comment/Interface";

const fetchComments = (): BaseAction => ({
  type: CommentActionType.fetchComments,
});
const fetchCommentsDetail = (): BaseAction => ({
  type: CommentActionType.fetchCommentsDetail,
});

const setComments = (payload: Comments.FetchCommentsResponse): BaseAction => ({
  type: CommentActionType.setComments,
  payload,
});

const setCommentsDetail = (payload: Comments.Comment, idPost: string): any => ({
  type: CommentActionType.setCommentsDetail,
  payload,
  idPost,
});

export default {
  fetchComments,
  fetchCommentsDetail,
  setComments,
  setCommentsDetail,
};
