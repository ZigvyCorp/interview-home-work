import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
  fitlerParams: {}
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, actionPayload) => {
        state.blogs = actionPayload.payload;
    },
    getBlogs: (state, actionPayload) => {
      state.fitlerParams = actionPayload.fitlerParams;
    },
    postBlog: (state, actionPayload) => {
    }
  },
  
});

export const { setBlogs, getBlogs, postBlog } = blogSlice.actions;


export default blogSlice.reducer;
