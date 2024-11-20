import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  comment: {
    _id: null,
    owner: null,
    content: '',
    created_at: null,
    post: null,
  },
  isLoading: false,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    fetchComment: (state) => {
      state.isLoading = true;
    },
    fetchCommentsSuccess: (state, action) => {
      //   console.log(action.payload);
      state.comments = action.payload;
      state.isLoading = false;
    },
  },
});
export const { fetchComment, fetchCommentsSuccess } = commentSlice.actions;
export default commentSlice.reducer;
