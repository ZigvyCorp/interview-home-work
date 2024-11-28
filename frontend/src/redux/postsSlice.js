import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPostsRequest(state) {
      state.loading = true;
    },
    fetchPostsSuccess(state, action) {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;
export default postsSlice.reducer;
