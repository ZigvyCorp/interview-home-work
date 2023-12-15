import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "interfaces/comment";
import { COMMENTS, ICommentState } from "../types/comment";

const initialState: ICommentState = {
  isLoading: false,
};

export const commentSlice = createSlice({
  name: COMMENTS,
  initialState,
  reducers: {
    createCommentStart: (
      state: ICommentState,
      action: PayloadAction<Omit<IComment, "id">>
    ) => {
      state.isLoading = true;
    },
    createCommentSuccess: (state: ICommentState) => {
      state.isLoading = false;
    },
  },
});

export const { createCommentStart, createCommentSuccess } =
  commentSlice.actions;
export const commentSelector = (state: { comments: ICommentState }) =>
  state.comments;
export default commentSlice.reducer;
