import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: []
}
const PostsReducer = createSlice({
  name: 'PostsReducer',
  initialState,
  reducers: {
    getListPosts: (state, action) => {
      state.posts = action.payload
    }
  }
})

export const {getListPosts} = PostsReducer.actions
export default PostsReducer.reducer