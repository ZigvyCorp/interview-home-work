
import { fork, put, take, select, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import { AxiosResponse } from 'axios';
import { login, loginFailed, loginSuccess, logout } from '../reducer/userReducer';
import { User } from '../../models/UserModel';
import userApi from '../../api/userApi';

function* handleLogin(body: User) {
	try {
		const response: AxiosResponse = yield call(userApi.login, body);
		yield put(loginSuccess(response.data?.user));
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		yield put(loginFailed(error?.response?.data?.message || 'Error Network!'));
	}
}

function* watchLoginFlow() {
	yield take(REHYDRATE);
	while (true) {
		const { user } = yield select((state) => state);
		const isLoggedIn = user.currentUser;

		if (!isLoggedIn) {
			const action: PayloadAction<User> = yield take(login.type);
			yield fork(handleLogin, action.payload);
		} else {
			yield take(logout.type);
			yield put(logout());
		}
	}
}

export function* userSaga() {
	yield fork(watchLoginFlow);
}
