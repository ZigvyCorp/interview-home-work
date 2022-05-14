import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios').default

const initialState = {
  value: { data: [] },
  status: 'idle',
};

export const getPostsAsync = createAsyncThunk(
  'posts/getPosts',
  async (args) => {
    const response = await axios.get(`http://localhost:3001/posts?limit=${args.limit}&offset=${args.offset}`)
    return response.data;
  }
);

export const getMorePostsAsync = createAsyncThunk(
  'posts/getMorePosts',
  async (args) => {
    const response = await axios.get(`http://localhost:3001/posts?limit=${args.limit}&offset=${args.offset}`)
    return response.data;
  }
);



export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getMorePostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMorePostsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        if (state.value !== null) {
          state.value.data.push(...action.payload.data);
        }
      });
  },
});

export const { increment, decrement, incrementByAmount } = postsSlice.actions;

export const selectPostState = (state) => state.posts;


export default postsSlice.reducer;
