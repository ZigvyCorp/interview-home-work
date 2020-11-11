import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  error: null,
  isLoading: false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostStarted(state) {
      state.isLoading = true
    },

    fetchPostSuccess(state, action) {
      state.isLoading = false
      state.data = action.payload
      state.error = null
    },

    fetchPostFailed(state, action) {
      state.isLoading = false
      state.data = []
      state.error = action.payload.error
    },
  },
})

export const {
  fetchPostStarted,
  fetchPostSuccess,
  fetchPostFailed,
} = postSlice.actions

export const selectPost = (state) => state.post
export default postSlice.reducer
