import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import * as types from '../actions/actionTypes';

export default function* watchUserAuthentication() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
    yield takeLatest(types.LOGIN_USER, loginSaga);
}