import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Comment } from "../../models/CommentModel";

interface CommentState {
  isLoading?: boolean;
  data?: Comment[];
}

const initialState: CommentState = {
  isLoading: false,
  data: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    gettingComments: (state) => {
      state.isLoading = true;
    },
    getCommentsSuccess: (state, action: PayloadAction<Comment[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getCommentsFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.data = [];
      action.payload && alert(action.payload);
    },
  },
});

export const { getCommentsFailed, getCommentsSuccess, gettingComments } =
  commentSlice.actions;
export const CommentState = (state: RootState) => state.comment;
export default commentSlice.reducer;
