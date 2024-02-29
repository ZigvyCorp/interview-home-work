import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost(state, action) {
      return {
        posts: [...action.payload],
      };
    },
  },
});

export const actions = post.actions;

export default post.reducer;
