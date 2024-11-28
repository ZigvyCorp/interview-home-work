import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  comments: [],
  loading: true,
  error: null,
  limit: 10,
  skip: 0,
  hasMore: true,
  postId: null,
};
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    fetchCommentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCommentsSuccess(state, action) {
      state.loading = false;
      state.comments.push(...action.payload);
      state.skip += action.payload.length;
      if (action.payload.length < state.limit) state.hasMore = false;
    },
    fetchCommentsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetComments(state) {
      state.comments = [];
      state.loading = true;
      state.limit = 10;
      state.skip = 0;
      state.hasMore = true;
      state.postId = null;
      state.error = null;
    },
    setPostId(state, action) {
      state.postId = action.payload;
    },
  },
});

export const {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  resetComments,
  setPostId
} = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
