import { IPost } from "@/common/@types/types";
import { createSlice } from "@reduxjs/toolkit";

type PostsState = {
  posts: IPost[];
};

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
    },
    getPostsFailure: (state, action) => {
      state.posts = [];
    },
  },
});

export const { reducer: postsReducer } = postsSlice;
export const postsActions = postsSlice.actions;
