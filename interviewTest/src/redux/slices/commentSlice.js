import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "posts",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {
    getCommentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getCommentsSuccess(state, action) {
      console.log("getComments", action.payload);
      state.loading = false;
      state.comments = action.payload;
    },
    getCommentsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCommentsStart, getCommentsSuccess, getCommentsFailure } =
  commentSlice.actions;

export default commentSlice.reducer;
