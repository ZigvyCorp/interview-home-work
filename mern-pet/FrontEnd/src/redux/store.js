import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})