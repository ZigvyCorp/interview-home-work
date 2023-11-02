// postsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { POSTS_SLICE_NAME } from "../../constants/slice.constants";
import { Post } from "../../models/posts.model";

interface PostState {
  posts: Post[];
  loading: boolean;
  error: Error | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: POSTS_SLICE_NAME,
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;
export const selectPosts = (state: { posts: PostState }) => state.posts;
export const postReducer = postsSlice.reducer;
