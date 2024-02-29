import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    totalPages: 0,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.totalPages = action.payload.totalPages;
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
