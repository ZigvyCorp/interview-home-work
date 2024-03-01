import { call, put, takeLatest } from 'redux-saga/effects'
import { apiGetPosts } from '../../services/postService'
import actionTypes from "../actions/actionTypes";

export default function* fetchPostsSaga(action) {
    try {
        const { skip, limit, title } = action.payload
        const response = yield call(apiGetPosts, skip, limit, title)
        yield put({ type: actionTypes.GET_POSTS, posts: response, msg: '' })
    } catch (error) {
        yield put({ type: actionTypes.GET_POSTS, posts: [], msg: error.message })
    }
}

export function* watchFetchPosts() {
    yield takeLatest('posts/getPostsStart', fetchPostsSaga)
}