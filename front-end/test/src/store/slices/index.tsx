import { combineReducers } from '@reduxjs/toolkit'
import postSlice from './postsSlice'
import blacklistSlice from './blacklistSlice'
import modalSlice from './modalSlice'

export default combineReducers({
  posts: postSlice,
  blacklist: blacklistSlice,
  modal: modalSlice
})
