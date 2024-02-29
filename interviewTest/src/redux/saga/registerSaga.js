import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "../slices/authSlice";
import { registerAPI } from "../../api/api";

function* register({ payload }) {
  try {
    console.log("register", payload);
    const result = yield call(registerAPI, payload);

    yield put(registerSuccess(result));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

function* watchSearchPosts() {
  yield takeLatest(registerStart.type, register);
}

export const registerSaga = [fork(watchSearchPosts)];
