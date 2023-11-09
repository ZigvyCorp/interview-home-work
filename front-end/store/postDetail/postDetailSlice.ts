import { createSlice } from '@reduxjs/toolkit'

interface PostDetailProps {
	body: string
	createdAt: any
	email: string
	name: string
	postId: any
	__v: any
	_id: string
}
interface postDetailSliceProps {
	postDetail: PostDetailProps
}

const initialState = {
	postDetail: {}
} as postDetailSliceProps

const postDetailSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		getPostDetailRedux: (state, action) => {
			state.postDetail = action.payload
		}
	}
})
export const { getPostDetailRedux } = postDetailSlice.actions
export default postDetailSlice.reducer
