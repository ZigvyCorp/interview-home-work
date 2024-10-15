import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  error: null
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostsRequest: (state) => {
      state.error = null
    },
    getPostsSucess(state, action) {
      state.posts = action.payload
    },
    getPostsFailure: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { getPostsRequest, getPostsSucess, getPostsFailure } = postSlice.actions

export default postSlice.reducer
