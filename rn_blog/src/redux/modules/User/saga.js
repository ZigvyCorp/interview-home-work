import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, receiveAllUser } from './actions';
import * as Api from '../../../api';

function* getAllUser() {
    try {
        const result = yield call(Api.user.fetchAllUser);
        yield put(receiveAllUser(result));
    } catch (e) {
        console.error(e);
    }
}

export default function* userSaga() {
    yield takeLatest(actionTypes.REQUEST_ALL_USER, getAllUser);
}