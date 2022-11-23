import { createReducer } from "@reduxjs/toolkit";
import { CommentActionType } from "../actionTypes";
import { Comments } from "../../API/Comment/Interface";

const initialState: {
  comments: Comments.CommentList;
  comment: Comments.Comment;
} = {
  comments: [],
  comment: {},
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(
      CommentActionType.setComments,
      (state: { [key: string]: any }, action: { [key: string]: any }) => {
        state.comments = action.payload.items;
      }
    )
    .addCase(
      CommentActionType.setCommentsDetail,
      (state: { [key: string]: any }, action: { [key: string]: any }) => {
        state.comment = action.payload;
      }
    )
);
