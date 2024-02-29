import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    handleGetComments: (state) => {
      state.isLoading = true;
    },
    handleGetCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    handleGetCommentsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer: commentReducer, actions } = commentSlice;
export const {
  handleGetComments,
  handleGetCommentsSuccess,
  handleGetCommentsFailure,
} = actions;
export default commentReducer;
