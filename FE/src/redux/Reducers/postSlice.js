import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: {
    _id: null,
    owner: null,
    title: '',
    content: '',
    created_at: null,
    tags: [],
  },
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPost: (state) => {
      state.isLoading = true;
    },
    fetchPostsSuccess: (state, action) => {
      //   console.log(action.payload);
      state.posts = action.payload;
      state.isLoading = false;
    },
  },
});
export const { fetchPost, fetchPostsSuccess } = postSlice.actions;
export default postSlice.reducer;
