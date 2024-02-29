import { IPost } from "@/common/@types/types";
import { createSlice } from "@reduxjs/toolkit";

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
});

export const { reducer: postsReducer } = postsSlice;
export const postsActions = postsSlice.actions;
