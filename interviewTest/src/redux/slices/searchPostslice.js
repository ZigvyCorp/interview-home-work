import { createSlice } from "@reduxjs/toolkit";

const searchPostsSlice = createSlice({
  name: "searchPosts",
  initialState: {
    searchPosts: [],
    loading: false,
    error: null,
  },
  reducers: {
    searchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    searchPostsSuccess(state, action) {
      console.log("searchPostsSuccess", action.payload);
      state.loading = false;
      state.searchPosts = action.payload;
    },
    searchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearSearchPost(state, action) {
      state.loading = false;
      state.searchPosts = [];
      state.error = null;
    },
  },
});

export const {
  searchPostsStart,
  searchPostsSuccess,
  searchPostsFailure,
  clearSearchPost,
} = searchPostsSlice.actions;

export default searchPostsSlice.reducer;
