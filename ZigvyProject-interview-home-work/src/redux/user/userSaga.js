import { call, fork, put, takeLatest } from "redux-saga/effects";
// import { fetchPosts } from "../api";
import { login, register } from "../../api/userApi";

import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  SetUserLoginStart,
  setUserLoginSuccess,
  setUserLoginFailure,
  resetUserData,

} from "./userSlice";

function* getUserInfo({ payload }) {
  try {
    // const { page, limit } = payload;
    // console.log({ page });
    const userInfo = yield call(login, payload);

    yield put(setUserLoginSuccess(userInfo));
  } catch (error) {
    yield put(setUserLoginFailure(error));
  }
}

function* setUserInfo({ payload }) {
  try {
    // const { page, limit } = payload;
    // console.log({ page });
    const userInfo = yield call(register, payload);
    console.log(userInfo)
    yield put(fetchUserSuccess(userInfo));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* watchGetUsers() {
  yield takeLatest(SetUserLoginStart.type, getUserInfo);
}

function* watchSetUsers() {
  yield takeLatest(fetchUserStart.type, setUserInfo);
}

export const usersSaga = [fork(watchGetUsers), fork(watchSetUsers)];
