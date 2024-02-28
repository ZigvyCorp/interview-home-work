import { put, call, takeLatest } from 'redux-saga/effects';
import { commentActions } from './commentSlice';
import commentApi from '../../apis/commentApi';

function* fetchCommentList() {
    try {
        const response = yield call(commentApi.getComments);
        yield put(commentActions.fetchCommentListSuccess(response));
    } catch (err) {
        console.log("Fetch comment list failed", err);
        yield put(commentActions.fetchCommentListFailed());
    }
}

function* commentSaga() {
    yield takeLatest(commentActions.fetchCommentList.type, fetchCommentList);
}

export default commentSaga;