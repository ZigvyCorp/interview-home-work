import { takeLatest, call, put } from 'redux-saga/effects';
import * as commentActions from '../actions/comment';
import * as commentAPI from '../../api/commentAPI';

function* fetchCommentsSaga(action){
    const comments = yield call(commentAPI.fetchComments);
    yield put(commentActions.getComments.getCommentsSuccess(comments.data));
}


function* commentSaga() {
    yield takeLatest(commentActions.getComments.getCommentsRequest,fetchCommentsSaga);
}

export default commentSaga;