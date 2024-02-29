import { IPost } from "@/common/@types/types";
import { createSlice } from "@reduxjs/toolkit";
import { getPostsThunk } from "./postsThunkAction";

type PostsState = {
  posts: IPost[];
  loading: boolean;
  filter: string;
};

const initialState: PostsState = {
  posts: [],
  loading: true,
  filter: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPostsThunk.rejected, (state) => {
        state.loading = true;
      });
  },
});

export const { reducer: postsReducer } = postsSlice;
export const postsActions = postsSlice.actions;
