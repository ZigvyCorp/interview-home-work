import { call, put, takeEvery } from 'redux-saga/effects';
import commentService from '../../services/comment';
import { CREATE_COMMENT, GET_COMMENTS_BY_POST } from './actionTypes';
import { createCommentSuccess, getCommentByPostSuccess } from './action';
import { increaseCommentCount } from '../post/actions';

function* createCommentSaga({ payload }) {
    try {
        const res = yield call(commentService.createComment, payload);
        yield put(createCommentSuccess(res.data.newComment));
        yield put(increaseCommentCount(res.data.newComment.postId));
    } catch (err) {
        console.log(err);
    }
}

function* getCommentByPostSaga({ payload }) {
    try {
        const res = yield call(commentService.getCommentsByPostId, payload);
        yield put(getCommentByPostSuccess({ postId: res.data.postId, comments: res.data.comments }));
    } catch (err) {
        console.log(err);
    }
}

function* commentSaga() {
    yield takeEvery(CREATE_COMMENT, createCommentSaga);
    yield takeEvery(GET_COMMENTS_BY_POST, getCommentByPostSaga);
}

export default commentSaga;