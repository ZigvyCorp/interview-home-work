import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchCommentsSuccess, fetchCommentsFailure, FETCH_COMMENTS_REQUEST } from './commentAction';
import { fetchAllCommentAPI } from './commentService';

function* fetchCommentsSaga(data) {
    try {
        const res = yield call(fetchAllCommentAPI, data.payload);
        yield put(fetchCommentsSuccess({
            comments: res.data,
            postId: data.payload.postId,
            page: data.payload.page
        }));
    } catch (error) {
        yield put(fetchCommentsFailure(error));
    }
}

export default function* watchFetchComments() {
    yield takeEvery(FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}

