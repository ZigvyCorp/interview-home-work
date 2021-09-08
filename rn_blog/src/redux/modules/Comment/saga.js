import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, receiveAllComment } from './actions';
import * as Api from '../../../api';

function* getAllComment() {
    try {
        const result = yield call(Api.comment.fetchAllComment);
        yield put(receiveAllComment(result));
    } catch (e) {
        console.error(e);
    }
}

export default function* commentSaga() {
    yield takeLatest(actionTypes.REQUEST_ALL_COMMENT, getAllComment);
}