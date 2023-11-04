import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";


const postSlice = createSlice({
    name: 'post',
    initialState: {
      posts: [],
      totalItems: 0,
      totalPages: 0,
      currentPage: 0,
      isLoading: false
    },
    reducers: {
      fetchPostData(state, action) {
        state.isLoading = true;
      },
      fetchPostSuccess(state, action) {
        state.posts = action.payload.data;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
        state.currentPage = Number(action.payload.currentPage);
        state.isLoading = false;
      },
      fetchPostFail(state) {
        state.isLoading = false;
      },
    }
  })

export const {fetchPostData, fetchPostSuccess, fetchPostFail} = postSlice.actions;

export default postSlice.reducer;

export const selectPostData= (state : RootState) => state.postReducer.posts;
export const selectTotalPages= (state : RootState) => state.postReducer.totalPages;
export const selectCurrentPage= (state : RootState) => state.postReducer.currentPage;
export const selectFetchPostState= (state : RootState) => state.postReducer.isLoading;

