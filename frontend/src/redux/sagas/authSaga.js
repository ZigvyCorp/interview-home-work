import { put, takeLatest } from "redux-saga/effects";
import { loginApi, registerApi } from "../../apis/authApi";
import {
  LOGIN_LOADING_OFF,
  LOGIN_LOADING_ON,
  LOG_IN_FAILED,
  LOG_IN_FETCH,
  LOG_IN_SUCCEEDED,
  REGISTER_FETCH,
} from "../types/authType";

function* login(action) {
  try {
    yield put({
      type: LOGIN_LOADING_ON,
    });
    let loginCall = yield loginApi(
      action.payload.username,
      action.payload.password
    );
    yield put({
      type: LOGIN_LOADING_OFF,
    });
    action.payload.callback("Login successful");
    yield put({
      type: LOG_IN_SUCCEEDED,
      payload: {
        user: loginCall.data.data.user,
        token: loginCall.data.data.token.access.token,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOGIN_LOADING_OFF,
    });
    action.payload.callbackError(error.response?.data?.message);
    yield put({
      type: LOG_IN_FAILED,
      payload: {
        error: error.response?.data?.message,
      },
    });
  }
}

function* register(action) {
  try {
    yield put({
      type: LOGIN_LOADING_ON,
    });
    let registerCall = yield registerApi(
      action.payload.username,
      action.payload.password,
      action.payload.name,
      action.payload.dob
    );
    yield put({
      type: LOGIN_LOADING_OFF,
    });
    action.payload.callback("Register and Login successful");
    yield put({
      type: LOG_IN_SUCCEEDED,
      payload: {
        user: registerCall.data.data.user,
        token: registerCall.data.data.token.access.token,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOGIN_LOADING_OFF,
    });
    action.payload.callbackError(error.response?.data?.message);
    yield put({
      type: LOG_IN_FAILED,
      payload: {
        error: error.response?.data?.message,
      },
    });
  }
}

const authSaga = [
  takeLatest(LOG_IN_FETCH, login),
  takeLatest(REGISTER_FETCH, register),
];

export default authSaga;
