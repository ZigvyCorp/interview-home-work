// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\redux\sagas\userSaga.js
import {call, put, takeLatest} from 'redux-saga/effects';
import {loginRequest, loginSuccess, loginFailure} from '../slices/userSlice';
import {loginUser} from '../../api/userApi';

function* loginSaga(action) {
    try {
        const data = yield call(loginUser, action.payload);

        yield put(loginSuccess({token: data.token, name: data.name}));

        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name);

        window.location.href = '/';
    } catch (error) {
        yield put(loginFailure(error.message || 'Something went wrong!'));
    }
}

export function* watchLoginSaga() {
    yield takeLatest(loginRequest.type, loginSaga);
}
