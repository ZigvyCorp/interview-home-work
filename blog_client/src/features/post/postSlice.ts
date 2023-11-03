import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../models/post";
import {
  ListParams,
  ListResponse,
  PaginationParams,
} from "../../models/common";
import { RootState } from "../../app/store";

export interface PostState {
  loading: boolean;
  posts: Post[];
  current_post?: Post;
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: PostState = {
  loading: false,
  posts: [],
  filter: {
    _page: 1,
    _limit: 2,
  },
  pagination: {
    _page: 1,
    _limit: 2,
    _totalRows: 15,
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchPostListSuccess(state, action: PayloadAction<ListResponse<Post>>) {
      state.posts = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchPostListFailed(state) {
      state.loading = false;
    },
    fetchPostById(state, action: PayloadAction<number>) {
      state.loading = true;
    },

    fetchPostByIdSuccess(state, action: PayloadAction<Post>) {
      state.current_post = action.payload;
      state.loading = false;
    },

    fetchPostByIdFailed(state) {
      state.loading = false;
    },
    setPagination(state, action: PayloadAction<PaginationParams>) {
      state.pagination = action.payload;
    },
  },
});

//Actions
export const postActions = postSlice.actions;

//// Selectors
export const selectPostById = (state: RootState) => state.posts.current_post;
export const selectPostList = (state: RootState) => state.posts.posts;
export const selectPostLoading = (state: RootState) => state.posts.loading;
export const selectPostFilter = (state: RootState) => state.posts.filter;
export const selectPostPagination = (state: RootState) =>
  state.posts.pagination;

//Reducers
export default postSlice.reducer;
