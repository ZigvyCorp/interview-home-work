import { all, call, put, takeLatest } from "redux-saga/effects";
import { get } from "../../apis";
import { User } from "../../types";
import { setToken, setUser } from "../actions/user.action";
import { GET_TOKEN, GET_USER } from "../types";



export function* getUser() {
  try {
    const { data: user } = yield call(get, `/users/info`);
    yield put(setUser(user));

  } catch (error) {
    console.log(error);
  }
}
export function* getToken() {
  try {
    const { data: token } = yield call(get, `/users/refresh_token`);
    yield put(setToken(token.access_token));
  } catch (error) {
    console.log(error);
  }
}

// ======watcher===========
function* watcherUsers() {
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(GET_TOKEN, getToken);
}

export function* userSaga() {
  yield all([watcherUsers()]);
}
