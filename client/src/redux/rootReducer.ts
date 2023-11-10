import { combineReducers } from '@reduxjs/toolkit'
import postReducer from './features/post/postSlice'
import userReducer from './features/user/userSlice'

export const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
})
