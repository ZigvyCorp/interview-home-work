import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: [],
  error: null,
  isLoading: false,
}

export const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfoStarted(state) {
      state.isLoading = true
    },

    getUserInfoSuccess(state, action) {
      state.isLoading = false
      state.info = action.payload
      state.error = null
    },

    getUserInfoFailed(state, action) {
      state.isLoading = false
      state.info = []
      state.error = action.payload.error
    },
  },
})

export const {
  getUserInfoStarted,
  getUserInfoSuccess,
  getUserInfoFailed,
} = userInfoSlice.actions

export const selectUserInfo = (state) => state.user
export default userInfoSlice.reducer
