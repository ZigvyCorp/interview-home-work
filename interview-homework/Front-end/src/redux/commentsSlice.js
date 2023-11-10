import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    fetchCommentsStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchCommentsSuccess: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    },
    fetchCommentsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsFailure,
} = commentsSlice.actions;

export default commentsSlice.reducer;
