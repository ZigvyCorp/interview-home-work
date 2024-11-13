import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_COMMENTS, fetchCommentsSuccess, fetchCommentsFailure } from '../actions/commentActions';

function* fetchCommentsSaga() {
    try {
        const response = yield call(axios.get, 'http://172.20.10.4:3000/api/comments');
        yield put(fetchCommentsSuccess(response.data));
    } catch (error) {
        yield put(fetchCommentsFailure(error.message));
    }   
}

export default function* commentSaga() {
    yield takeEvery(FETCH_COMMENTS, fetchCommentsSaga);
}
