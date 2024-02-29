import { put, call, takeEvery } from "redux-saga/effects";
import { Login } from "../../types/User/types";

import userApi from "../../apis/userApi";
import { getCurrentUser, getCurrentUserFailure, getCurrentUserSuccess, getSuggestUserFailure, getSuggestUserSuccess, loginFailure, loginSuccess, logout } from "../actions/userActions";
import { GET_CURRENT_USER, GET_SUGGEST_USER, LOGIN } from "../actions/actions";
import { notification } from "antd";

type LoginAction = {
  type: string
  payload: Login
}

function* fetchUsersSaga() {
  try {
    const { data: users } = yield call(userApi.fetchUsers);
    yield put(getSuggestUserSuccess(users));
  } catch (error) {
    yield put(getSuggestUserFailure());
  }
}

function* loginSaga(action: LoginAction) {
  try {
    const { data: token } = yield call(userApi.login, action.payload)
    yield put(loginSuccess(token))
    yield put(getCurrentUser())
  } catch (error: any) {
    console.log(error)
    notification.error({
      message: error.message
    })
    yield put(loginFailure())
  }
}

function* getCurrentUserSaga() {
  try {
    const { data: user } = yield call(userApi.getCurrentUser)
    yield put(getCurrentUserSuccess(user))
  } catch (error) {
    yield put(getCurrentUserFailure())
    yield put(logout())
  }
}

function* userSaga() {
  yield takeEvery(GET_SUGGEST_USER, fetchUsersSaga);
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(GET_CURRENT_USER, getCurrentUserSaga);
}

export default userSaga;
