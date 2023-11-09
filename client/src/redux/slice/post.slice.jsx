import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import postController from '../api/post.controller'

export const initialState = {
  posts: [],
  status: 'idle',
}

export const getAllPosts = createAsyncThunk('getAllPosts', async () => {
  const response = await postController.getAllPost()
  return response
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get post
    builder.addCase(getAllPosts.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.status = 'idle'
      state.posts = action.payload.posts
    })

    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.status = 'failed'
    })
  },
})

export default postSlice.reducer
