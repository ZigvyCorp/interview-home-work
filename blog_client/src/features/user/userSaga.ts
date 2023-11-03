import { call, put, takeLatest } from "redux-saga/effects";
import { User } from "../../models/user";
import userApi from "../../api/userApi";
import { userActions } from "./userSlice";

function* fetchUserList() {
  try {
    const response: User[] = yield call(userApi.getAll);
    yield put(userActions.fetchUserListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch user list", error);
    yield put(userActions.fetchUserListFailed());
  }
}

export default function* userSaga() {
  yield takeLatest(userActions.fetchUserList, fetchUserList);
}
