// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\redux\sagas\postDetailSaga.js
import {call, put, takeLatest} from 'redux-saga/effects';
import {
    fetchPostDetailRequest,
    fetchPostDetailSuccess,
    fetchPostDetailFailure,
    addCommentRequest,
    addCommentSuccess,
    addCommentFailure,
} from '../slices/postDetailSlice';
import {fetchPostDetailApi, addCommentApi} from '../../api/postApi';

function* fetchPostDetailSaga(action) {
    try {
        const {post, comments} = yield call(fetchPostDetailApi, action.payload);
        yield put(fetchPostDetailSuccess({post, comments}));
    } catch (error) {
        yield put(fetchPostDetailFailure(error.message || 'Something went wrong while fetching post details.'));
    }
}

function* addCommentSaga(action) {
    try {
        const newComment = yield call(addCommentApi, action.payload);
        yield put(addCommentSuccess(newComment));
    } catch (error) {
        yield put(addCommentFailure(error.message || 'Failed to add comment.'));
    }
}

export function* watchPostDetailSaga() {
    yield takeLatest(fetchPostDetailRequest.type, fetchPostDetailSaga);
    yield takeLatest(addCommentRequest.type, addCommentSaga);
}
