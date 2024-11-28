// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailure,
  logout,
  LOGIN_REQUEST,
} from "../actions/authActions";

function* login(action) {
  try {
    const { username, password } = action.payload || {};

    if (username === "admin" && password === "admin") {
      yield put(loginSuccess(action.payload));
    } else {
      yield put(loginFailure("Invalid credentials"));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
    console.error(error);
  }
}

function* logoutReq() {
  try {
    localStorage.removeItem("token");
    yield put(logout());
  } catch (error) {
    console.error(error);
  }
}

export default function* authSaga() {
  try {
    yield takeLatest(LOGIN_REQUEST, login);
    yield takeLatest(LOGOUT, logoutReq);
  } catch (error) {
    console.error("Auth saga root error:", error); 
  }
}
