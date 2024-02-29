import { createSlice } from "@reduxjs/toolkit";

const searchPostsSlice = createSlice({
  name: "searchPosts",
  initialState: {
    posts: [],
    title: "",
  },
  reducers: {
    postsByTitle: (state, action) => {
      state.posts = action.payload.posts;
      state.title = action.payload.title;
    },
  },
});

export const { postsByTitle } = searchPostsSlice.actions;
export default searchPostsSlice.reducer;
