import { getPostsRedux } from './postSlice'

export const getPosts = (token: any) => async (dispatch: any) => {
	try {
		// dispatch(showLoading(true))
		// const res = await getDataAPI('posts', token)
		// dispatch(getPostsRedux(res?.data))
		// dispatch(showLoading(false))
	} catch (err: any) {
		// showToastMessage(dispatch, err.response.data.msg, 'error')
	}
}
