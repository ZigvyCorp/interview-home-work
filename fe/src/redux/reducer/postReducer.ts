import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Pagination, Post, PostParams } from "../../models/PostModel";

interface PostState {
  isLoading?: boolean;
  data?: Post[];
  pagination?: Pagination;
}

const initialState: PostState = {
  isLoading: false,
  data: [],
  pagination: {
    offset: 0,
    limit: 10,
    total: 0,
  },
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    gettingPosts: (state, action: PayloadAction<PostParams | null>) => {
      state.isLoading = true;
      state.data = [];
    },
    getPostsSuccess: (
      state,
      action: PayloadAction<{ posts?: Post[]; pagination?: Pagination }>
    ) => {
      state.isLoading = false;
      state.data = action.payload.posts;
      state.pagination = action.payload.pagination;
    },
    getPostsFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.data = [];
      action.payload && alert(action.payload);
    },

    gettingMorePosts: (state, action: PayloadAction<PostParams | null>) => {
      state.isLoading = true;
    },
    getMorePostsSuccess: (
      state,
      action: PayloadAction<{ posts?: Post[]; pagination?: Pagination }>
    ) => {
      state.isLoading = false;
      state.data?.push(...(action.payload.posts || []));
      state.pagination = action.payload.pagination;
    },
    getMorePostsFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      action.payload && alert(action.payload);
    },
  },
});

export const {
  getPostsFailed,
  getPostsSuccess,
  gettingPosts,
  getMorePostsFailed,
  getMorePostsSuccess,
  gettingMorePosts,
} = postSlice.actions;
export const PostState = (state: RootState) => state.post;
export default postSlice.reducer;
