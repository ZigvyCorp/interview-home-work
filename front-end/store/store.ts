import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import postSlice from './post/postSlice'
import postDetailSlice from './postDetail/postDetailSlice'
export const store = configureStore({
	reducer: {
		postSlice,
		postDetailSlice
	}
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
