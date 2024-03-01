import { takeLatest, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { login, register, saveLogin } from '../features/auth-slice';
import { IUser } from '@/types/user'; // Adjust the import path for IUser
import { toast } from 'react-toastify';
import configService from '@/services/configService';

function* handleRegister(action: PayloadAction<Omit<IUser, 'id' | 'dob'>>) {
  try {
    yield call(configService.post, '/auth/register', action.payload);

    yield call(toast.success, 'Registration successful');

    const data: {
      jwtToken: string;
      otherDetails: IUser;
    } = yield call(configService.post, '/auth/login', {
      email: action.payload.email,
      password: action.payload.password,
    });

    localStorage.setItem('access_token', data.jwtToken);

    yield put(
      saveLogin({
        ...data.otherDetails,
        id: data.otherDetails._id!,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield call(toast.error, `Login failed: ${error.message}`);
    }
  }
}

function* handleLogin(
  action: PayloadAction<Omit<IUser, 'id' | 'dob' | 'username'>>
) {
  try {
    const data: {
      jwtToken: string;
      otherDetails: IUser;
    } = yield call(configService.post, '/auth/login', action.payload);

    localStorage.setItem('access_token', data.jwtToken);

    yield put(
      saveLogin({
        ...data.otherDetails,
        id: data.otherDetails._id!,
      })
    );

    yield call(toast.success, 'Login successful');
  } catch (error) {
    if (error instanceof Error) {
      yield call(toast.error, `Login failed: ${error.message}`);
    }
  }
}

export function* authSaga() {
  yield takeLatest(register.type, handleRegister);
  yield takeLatest(login.type, handleLogin);
}
