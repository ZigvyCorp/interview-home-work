import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getPost } from '../../api/postApi';
import { fetchPostsSuccess, fetchPostsFailure } from './post.actions';

import PostActionTypes from './post.types';

export function* fetchPostsAsync() {
    try {
        const postMap = yield call(getPost(), '/');
        yield put(fetchPostsSuccess(postMap));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}

export function* fetchPostsStart() {
    yield takeLatest(PostActionTypes.FETCH_POSTS_START, fetchPostsAsync);
}

export function* postSagas() {
    yield all([call(fetchPostsStart)]);
}
