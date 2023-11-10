/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";
import { BlogItem, ReplyItem } from "@/models";

export interface BlogState {
  isLoading: boolean;
  error: string;
  blogs: BlogItem[];
  blog: BlogItem | undefined;
  replies: ReplyItem[];
}

const initialState: BlogState = {
  isLoading: false,
  error: "",
  blogs: [],
  blog: undefined,
  replies: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlogs: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    getBlogsSuccess: (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload.blogs;
    },
    getBlogsFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },

    getBlog: (state, _) => {
      state.isLoading = true;
      state.error = "";
    },
    getBlogSuccess: (state, action) => {
      state.isLoading = false;
      state.blog = action.payload.blog;
    },
    getBlogFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },

    getReply: (state, _) => {
      state.isLoading = true;
      state.error = "";
    },
    getReplySuccess: (state, action) => {
      state.isLoading = false;
      state.replies = action.payload.replies;
    },
    getReplyFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getBlogs,
  getBlogsFailed,
  getBlogsSuccess,
  getBlog,
  getBlogFailed,
  getBlogSuccess,
  getReply,
  getReplyFailed,
  getReplySuccess,
} = blogSlice.actions;

export const blogReducer = blogSlice.reducer;
