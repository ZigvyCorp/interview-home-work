import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getPosts } from '../api/posts.api';

function* fetchPosts(): Generator<any, void, any> {
    try {
        const posts = yield call(getPosts);
        yield put({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
    } catch (error) {
        yield put({ type: 'FETCH_POSTS_FAILURE' });
    }
}

function* watchFetchPosts() {
    yield takeLatest('FETCH_POSTS_REQUEST', fetchPosts);
}

export default function* rootSaga() {
    yield all([watchFetchPosts()]);
}