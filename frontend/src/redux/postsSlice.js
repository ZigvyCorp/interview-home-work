import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'posts',
  initialState: { isLoading: false },
  reducers: {
    onLoading: (state) => {
      state.isLoading = true
      return state
    },
    getPostsSuccess: (state, action) => {
      if (action.payload.currentPage === 1) {
        state = { ...action.payload, isLoading: false }
      } else {
        state.totalPages = action.payload.totalPages
        state.currentPage = action.payload.currentPage
        if (!state.data) {
          state.data = action.payload.data
        } else {
          state.data.push(...action.payload.data)
        }
        state.isLoading = false
      }
      return state
    },
  },
})

export const { getPostsSuccess, onLoading } = postsSlice.actions

export default postsSlice.reducer
