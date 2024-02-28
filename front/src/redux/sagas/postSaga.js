import { call, put, takeLatest } from 'redux-saga/effects'
import { getPosts } from '../../services/postServices'
import { getPostsFailure, getPostsSuccess } from '../features/postSlice'

function* fetchPostsSaga(action) {
    try {
        const { skip, limit, title } = action.payload
		const response = yield call(getPosts, skip, limit, title)
		yield put(getPostsSuccess(response))
	} catch (error) {
		yield put(getPostsFailure(error))
	}
}

export function* watchFetchPosts() {
	yield takeLatest('posts/getPostsStart', fetchPostsSaga)
}
