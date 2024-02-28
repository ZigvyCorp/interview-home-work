import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchPostsFailure, FETCH_POSTS_REQUEST } from './postAction';
import { fetchAllPostsAPI } from './postService';

function* fetchPostsSaga() {
    try {
        const posts = yield call(fetchAllPostsAPI());
        yield put(fetchPostsSuccess(posts));
    } catch (error) {
        yield put(fetchPostsFailure(error));
    }
}

export default function* watchFetchPosts() {
    yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

