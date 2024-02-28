import { createSlice } from "@reduxjs/toolkit";

export const cartSlide = createSlice({
  name: "cart",
  initialState: {
    posts: null,
  },
  reducers: {
    setPost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPost } = cartSlide.actions;
export default cartSlide.reducer;
