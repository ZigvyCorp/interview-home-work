import { call, fork, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginStart, loginSuccess } from "../slices/authSlice";
import { loginAPI } from "../../api/api";

function* login({ payload }) {
  try {
    console.log("login", payload);
    const result = yield call(loginAPI, payload);

    yield put(loginSuccess(result));
  } catch (error) {
    console.log("login", error);
    yield put(loginFailure(error));
  }
}

function* watchlogin() {
  yield takeLatest(loginStart.type, login);
}

export const loginSaga = [fork(watchlogin)];
