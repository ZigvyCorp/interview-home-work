import { put, call, takeEvery } from "redux-saga/effects";
import { User, UserAction } from "../types";
import users from "../../../data/users.json"; // Import local user data
import { loginFailure, loginSuccess } from "../actions/userAction";

function* handleLogin(action: UserAction) {
  const { username, password } = action.payload;
  const user = users.find(
    (u: User) => u.username === username && u.password === password
  );
  if (user) {
    yield put(loginSuccess(user));
  } else {
    yield put(loginFailure("Invalid username or password"));
  }
}

export function* watchLogin() {
  yield takeEvery("LOGIN_REQUEST", handleLogin);
}
