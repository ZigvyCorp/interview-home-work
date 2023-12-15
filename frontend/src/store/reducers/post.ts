import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_PAGE_SIZE } from "src/constants/common";
import { IPaginationList } from "src/interfaces/common";
import { IPost, IPostWithRelations } from "src/interfaces/post";
import { IPostPaginationQuery, IPostState, POSTS } from "../types/post";

const initialState: IPostState = {
  post: null,
  posts: [],
  totalCount: 0,
  isLoading: false,
  query: {
    titleSearch: "",
    start: 0,
    limit: DEFAULT_PAGE_SIZE,
  },
  postId: 0,
};

export const postSlice = createSlice({
  name: POSTS,
  initialState,
  reducers: {
    paginatePostStart: (
      state: IPostState,
      action: PayloadAction<IPostPaginationQuery>
    ) => {
      state.isLoading = true;
      state.query = action.payload;
    },
    paginatePostSuccess: (
      state: IPostState,
      action: PayloadAction<IPaginationList<IPostWithRelations>>
    ) => {
      state.posts = action.payload.list;
      state.totalCount = action.payload.totalCount;
      state.isLoading = false;
    },
    getPostDetailStart: (state: IPostState, action: PayloadAction<number>) => {
      state.isLoading = true;
      state.postId = action.payload;
    },
    getPostDetailSuccess: (
      state: IPostState,
      action: PayloadAction<IPostWithRelations | null>
    ) => {
      state.post = action.payload;
      state.isLoading = false;
    },
    createPostStart: (
      state: IPostState,
      action: PayloadAction<Omit<IPost, "id">>
    ) => {
      state.isLoading = true;
    },
    createPostSuccess: (state: IPostState) => {
      state.isLoading = false;
    },
  },
});

export const {
  paginatePostStart,
  paginatePostSuccess,
  getPostDetailStart,
  getPostDetailSuccess,
  createPostStart,
  createPostSuccess,
} = postSlice.actions;
export const postSelector = (state: { posts: IPostState }) => state.posts;
export default postSlice.reducer;
