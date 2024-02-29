import { IPost } from "@/common/@types/types";
import { createSlice } from "@reduxjs/toolkit";
import { getPostsThunk } from "./postsThunkAction";

type PostsState = {
  posts: IPost[];
  currentPage: number;
  loading: boolean;
};

const initialState: PostsState = {
  posts: [],
  currentPage: 1,
  loading: true,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.currentPage = action.payload.currentPage;
        state.loading = false;
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.loading = true;
      });
  },
});

export const { reducer: postsReducer } = postsSlice;
export const postsActions = postsSlice.actions;
