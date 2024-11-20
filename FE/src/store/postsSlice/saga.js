import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllPost } from '../../lib/fetchData'
import {  getPostsSuccess } from './slice'

function* fetchPost() {
    try {
        const posts = yield call(getAllPost)
        if (posts.length !== 0) {
            localStorage.setItem("POSTS", JSON.stringify(posts))
        }
        yield put(getPostsSuccess(posts))

    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}
function* postSaga() {
    yield takeEvery('posts/getPostsFetch', fetchPost)
}
export default postSaga
