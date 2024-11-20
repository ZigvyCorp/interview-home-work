import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "@/shared";

import { SLICE_INIT } from "./constants";
import { IBlog_SLICE } from "./interfaces";

const blogSlice = createSlice({
  name: "blog",
  initialState: SLICE_INIT as IBlog_SLICE,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, actions) => {
      state.loading = false;
      state.posts = actions.payload;
      state.error = null;
    },
    getPostsFail: (state) => {
      state.loading = false;
      state.posts = [];
    },
  },
});

// Actions

export const blogAction = blogSlice.actions;

// Selectors

export const selectBlog = (state: IRootState<any>) => state.blog;

// Reducer

export const blogReducer = blogSlice.reducer;
