import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comments: [],
  error: null,
  isLoading: false,
}

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    fetchCommentStarted(state) {
      state.isLoading = true
    },

    fetchCommentSuccess(state, action) {
      state.isLoading = false
      state.comments = action.payload
      state.error = null
    },

    fetchCommentFailed(state, action) {
      state.isLoading = false
      state.comments = []
      state.error = action.payload.error
    },
  },
})

export const {
  fetchCommentStarted,
  fetchCommentSuccess,
  fetchCommentFailed,
} = commentSlice.actions

export const selectComment = (state) => state.comments
export default commentSlice.reducer
