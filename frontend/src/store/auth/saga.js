import { takeEvery, call, put } from 'redux-saga/effects';

import authService from '../../services/auth';

import { GET_ME, LOGIN, REGISTER } from './actionTypes';
import { getMe, getMeSuccess, loginFailure, loginSuccess, logout, registerFailure } from './actions';

function* registerSaga({ payload: { formData } }) {
    try {
        const res = yield call(authService.register, formData);
        console.log("Res: ", res);
    } catch (err) {
        console.log('Register err: ', err);
        yield put(registerFailure(err.message));
    }
}

function* loginSaga({ payload: { formData, navigate } }) {
    try {
        const res = yield call(authService.login, formData);
        yield put(loginSuccess(res.data.accessToken));
        localStorage.setItem('accessToken', res.data.accessToken);
        yield put(getMe());
        navigate('/');
    } catch (err) {
        console.log("Login err: ", err);
        yield put(loginFailure());
    }
}

function* getMeSaga() {
    try {
        const res = yield call(authService.getMe);
        yield put(getMeSuccess(res.data.user));
    } catch (err) {
        yield put(logout());
    }
}

function* authSaga() {
    yield takeEvery(REGISTER, registerSaga);
    yield takeEvery(LOGIN, loginSaga);
    yield takeEvery(GET_ME, getMeSaga);
}

export default authSaga;