import { fork, call, put, takeLatest,takeEvery} from "redux-saga/effects";
import commentApi from '../api/CommentApi';
import {getCommentsSuccess,
    getCommentByPostSuccess} from '../actions/commentActions';
import {GET_ALL_COMMENTS,
    GET_COMMENT_BY_POST,} from '../actions/actionCreator';

function *getAllComments(action) {
    try {
        const response = yield call(commentApi.getAllComments, action.payload);
        yield put(getCommentsSuccess(response))

    } catch (error){
        console.log("ERROR", error)
    }
}

function *watchGetComments() {
    yield takeLatest(
        GET_ALL_COMMENTS,
        getAllComments
    )
}

function *getCommentById(action) {
    try {
        const response = yield call(commentApi.getCommentById, action.payload);
        yield put(getCommentByPostSuccess(response))

    } catch (error){
        console.log("ERROR", error)
    }
}

function* watchGetCommentByPost() {
    yield takeEvery(
        GET_COMMENT_BY_POST,
        getCommentById
    )
}

const commentSaga = [
    fork(watchGetComments),
    fork(watchGetCommentByPost),
];
export default commentSaga;