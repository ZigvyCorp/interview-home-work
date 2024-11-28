import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: true,
    error: null,
    limit: 10,
    skip: 0,
    hasMore: true,
    post: null,
  },
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action) {
      state.loading = false;
      state.posts.push(...action.payload);
      state.skip += action.payload.length;
      if (action.payload.length < state.limit) state.hasMore = false;
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPostStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostSuccess(state, action) {
      state.loading = false;
      state.post = action.payload;
    },
    fetchPostFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetPosts(state) {
      state.posts = [];
      state.skip = 0;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailure,
  resetPosts,
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
