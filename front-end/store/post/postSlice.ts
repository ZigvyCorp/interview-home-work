import { createSlice } from '@reduxjs/toolkit'

interface PostSliceProps {
	TotalItem: number
	TotalPage: Number

	posts: any[]

	result: Number
}

const initialState = {
	posts: [],
	result: 0,
	TotalPage: 0,
	TotalItem: 0
} as PostSliceProps

const postSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		getPostsRedux: (state, action) => {
			state.posts = action.payload.posts
			state.result = action.payload.result
			state.TotalItem = action.payload.TotalItem
			state.TotalPage = action.payload.TotalPage
		}
	}
})
export const { getPostsRedux } = postSlice.actions
export default postSlice.reducer
