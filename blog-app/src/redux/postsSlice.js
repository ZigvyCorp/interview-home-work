import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [], // Ensure this is initialized as an array
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.loading = true;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload; // Ensure payload is an array
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } =
  postsSlice.actions;

export default postsSlice.reducer;
