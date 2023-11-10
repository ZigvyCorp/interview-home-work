import { call, put, takeEvery } from 'redux-saga/effects';
import commentService from '../../services/comment';
import { CREATE_COMMENT } from './actionTypes';

function* createCommentSaga({ payload }) {
    try {
        const res = yield call(commentService.createComment, payload);
        console.log("Create commnet: ", res);
    } catch (err) {
        console.log(err);
    }
}

function* commentSaga() {
    yield takeEvery(CREATE_COMMENT, createCommentSaga);
}

export default commentSaga;