import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PostsSlice {
  posts: any[];
  searchText: string;
}

const initialState: PostsSlice = {
  posts: [],
  searchText: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
    },
    createPostSuccess: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePostSuccess: (state, action) => {
      const newPost = [...state.posts].filter(
        (item) => item._id !== action.payload
      );
      state.posts = newPost;
    },
    updatePostSuccess: (state, action) => {
      state.posts = [...state.posts].map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    },
    onChangeSearchText: (state, action) => {
      state.searchText = action.payload || "";
    },
  },
});

export const {
  getPostsSuccess,
  createPostSuccess,
  deletePostSuccess,
  updatePostSuccess,
  onChangeSearchText,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => {
  const posts = state.posts.posts;
  return posts;
};

export const selectSearchText = (state: RootState) => state.posts.searchText;

export default postsSlice.reducer;
