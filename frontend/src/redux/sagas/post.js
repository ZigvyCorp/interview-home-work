import { FETCH_POSTS_SAGA } from '../action/actionTypes'
import { put, takeLatest, select } from 'redux-saga/effects'
import { setPost } from '../reducer/post'
import { getListPost } from '../../services/post.service'

function* fetchPostSaga(action) {
    try {
        let data = yield select((state) => state.posts)
        const search = action.payload?.search
        const conditionCallAPI = !data || data.length === 0 || search

        if (conditionCallAPI) {
            data = yield getListPost({ search: search })
            yield put(setPost(data))
        }
    } catch (error) {
        console.error('Error fetching posts', error)
    }
}

export default function* watchFetchPosts() {
    yield takeLatest(FETCH_POSTS_SAGA, fetchPostSaga)
}
