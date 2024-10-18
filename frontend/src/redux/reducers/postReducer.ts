import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '../../types/postType';
const initialState: PostState = {
  posts: [],
  totalPosts: 0,
};
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    addPosts(state, action: PayloadAction<Post[]>) { 
        state.posts.push(...action.payload);
    },
    setTotalPosts(state, action: PayloadAction<number>) { 
        state.totalPosts = action.payload; 
      },
  },
});

export const { setPosts, addPosts, setTotalPosts } = postSlice.actions;
export default postSlice.reducer;
