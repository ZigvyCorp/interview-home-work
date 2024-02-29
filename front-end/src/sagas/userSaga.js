import { call, put, takeEvery } from "redux-saga/effects";

import userService from "../services/userService";
import {
  handleGetUsersFailure,
  handleGetUsersSuccess,
} from "../store/reducers/userReducer";

function* watchGetUsers() {
  try {
    const res = yield call(async () => userService.getUsers());
    if (res.data) {
      const users = res.data || [];
      yield put(handleGetUsersSuccess(users));
    }
  } catch (error) {
    yield put(handleGetUsersFailure());
  }
}

function* userSaga() {
  yield takeEvery("users/handleGetUsers", watchGetUsers);
}

export default userSaga;
