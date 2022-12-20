import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  posts: [],
  postsUpdate: []
}
const PostsReducer = createSlice({
  name: 'PostsReducer',
  initialState,
  reducers: {
    getListPosts: (state, action) => {
      state.posts = action.payload
      state.postsUpdate = state.posts
    },
    updatedListPost: (state, searchText) => {
      state.postsUpdate = [...state.posts].filter(post => post.title.includes(searchText.payload))
    }
  }
})

export const {getListPosts, updatedListPost} = PostsReducer.actions
export default PostsReducer.reducer