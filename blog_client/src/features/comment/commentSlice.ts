import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../models/comment";
import { RootState } from "../../app/store";

export interface CommentState {
  loading: boolean;
  comments: Comment[];
}

const initialState: CommentState = {
  loading: false,
  comments: [],
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    fetchCommentList(state, action: PayloadAction<number>) {
      state.loading = true;
    },
    fetchCommentListSuccess(state, action: PayloadAction<Comment[]>) {
      const uniqueCommentIds = new Set(
        action.payload.map((comment) => comment._id)
      );
      const filteredComments = state.comments.filter(
        (comment) => !uniqueCommentIds.has(comment._id)
      );
      state.comments = [...filteredComments, ...action.payload];
      state.loading = false;
    },
    fetchCommentListFailed(state) {
      state.loading = false;
    },
  },
});

//Actions
export const commentActions = commentSlice.actions;

//// Selectors
export const selectCommentList = (state: RootState) => state.comments.comments;
export const selectCommentLoading = (state: RootState) =>
  state.comments.loading;

//Reducers
export default commentSlice.reducer;
