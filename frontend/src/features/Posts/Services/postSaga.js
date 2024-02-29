import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchPostsFailure, FETCH_POSTS_REQUEST } from './postAction';
import { fetchPostByIdSuccess, fetchPostByIdFailure, FETCH_POST_BY_ID_REQUEST } from '../../PostDetail/Services/postAction'
import { fetchAllPostsAPI, fetchPostByIDAPI } from './postService';

function* fetchPostsSaga(action) {
    try {
        const res = yield call(fetchAllPostsAPI, action.payload);
        yield put(fetchPostsSuccess({
            data: res.data,
            page: action.payload
        }));
    } catch (error) {
        yield put(fetchPostsFailure(error));
    }
}

function* fetchPostByIdSaga(action) {
    try {
        const res = yield call(fetchPostByIDAPI, action.payload);
        yield put(fetchPostByIdSuccess(res.data));
    } catch (error) {
        yield put(fetchPostByIdFailure(error));
    }
}


export default function* watchFetchPosts() {
    yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
    yield takeEvery(FETCH_POST_BY_ID_REQUEST, fetchPostByIdSaga);
}

