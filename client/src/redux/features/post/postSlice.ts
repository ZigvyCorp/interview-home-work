import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  GetPostsParams,
  GetPostsResponse,
  PaginationInfo,
  PostState,
} from './postInterfaces'

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    pagination: {} as PaginationInfo,
    currentPost: null,
    isLoading: false,
    error: null,
  } as PostState,
  reducers: {
    getPosts: (state, _action: PayloadAction<GetPostsParams>) => {
      state.isLoading = true
    },
    getPostsSuccess: (state, action: PayloadAction<GetPostsResponse>) => {
      state.isLoading = false
      state.posts = action.payload.posts
      state.pagination = {
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        totalPosts: action.payload.totalPosts,
        limit: action.payload.limit,
      }
    },
    getPostsFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    getPostById: (state, _action: PayloadAction<string>) => {
      state.isLoading = true
    },
    getPostByIdSuccess: (state, action) => {
      state.isLoading = false
      state.currentPost = action.payload
    },
    getPostByIdFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    preSearchPosts: (_state, _action: PayloadAction<string>) => {},
    searchPosts: (state, _action: PayloadAction<string>) => {
      state.isLoading = true
    },
    searchPostsSuccess: (state, action) => {
      state.isLoading = false
      state.posts = action.payload.posts
      state.pagination = {
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        totalPosts: action.payload.totalPosts,
        limit: action.payload.limit,
      }
    },
    searchPostsFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  getPostById,
  getPostByIdSuccess,
  getPostByIdFailure,
  preSearchPosts,
  searchPosts,
  searchPostsSuccess,
  searchPostsFailure,
} = postSlice.actions

export default postSlice.reducer
