import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postId: 1,
  id: 1,
  name: '',
  email: '',
  body: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
});

export default commentsSlice.reducer;
