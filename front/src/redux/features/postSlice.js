import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [],
	loading: false,
	totalCount: 0,
	error: null,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPostsStart(state) {
			state.loading = true
			state.error = null
		},
		getPostsSuccess(state, action) {
			state.list = [...state.list, ...action.payload.posts]
			state.totalCount = action.payload.totalCount
			state.loading = false
		},
		getPostsFailure(state, action) {
			state.loading = false
			state.error = action.payload
		},
	},
})
export const { getPostsStart, getPostsSuccess, getPostsFailure } = postsSlice.actions

export default postsSlice.reducer
