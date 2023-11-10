import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserState } from './userInterfaces'
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  } as UserState,
  reducers: {
    getUser: state => {
      state.isLoading = true
    },
    getUserSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.user = action.payload
    },
    getUserFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    logout: state => {
      state.user = null
    },
  },
})

export const { getUser, getUserSuccess, getUserFailure, logout } =
  userSlice.actions

export default userSlice.reducer
