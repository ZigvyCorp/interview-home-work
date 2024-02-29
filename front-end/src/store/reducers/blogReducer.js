import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  isLoading: false,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getBlogsFetch: (state) => {
      state.isLoading = true;
    },
    getBlogsSuccess: (state, action) => {
      state.blogs = action.payload;
      state.isLoading = false;
    },
    getBlogsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer: blogReducer, actions } = blogSlice;
export const { getBlogsFetch, getBlogsSuccess, getBlogsFailure } = actions;
export default blogReducer;
