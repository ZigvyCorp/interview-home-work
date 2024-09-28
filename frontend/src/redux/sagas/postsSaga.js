// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\redux\sagas\postsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchPostsRequest,
    fetchPostsSuccess,
    fetchPostsFailure,
    createPostRequest,
    createPostSuccess,
    createPostFailure
} from '../slices/postsSlice';
import { fetchPostsApi, createPostApi } from '../../api/postApi';

function* fetchPostsSaga(action) {
    try {
        const { page, limit, searchTerm, reset } = action.payload;
        const result = yield call(fetchPostsApi, page, limit, searchTerm);
        yield put(fetchPostsSuccess({ posts: result.posts, hasMore: result.hasMore, reset }));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}

function* createPostSaga(action) {
    try {
        const result = yield call(createPostApi, action.payload);
        yield put(createPostSuccess(result));
    } catch (error) {
        yield put(createPostFailure(error.message));
    }
}

export function* watchPostsSaga() {
    yield takeLatest(fetchPostsRequest.type, fetchPostsSaga);
    yield takeLatest(createPostRequest.type, createPostSaga);
}
