import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: 1,
  id: 1,
  title: '',
  body: '',
  isLoading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } =
  postsSlice.actions;
export default postsSlice.reducer;
