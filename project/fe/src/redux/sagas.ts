import { put, takeEvery } from "redux-saga/effects";
import { login, register } from "../services/UserService.ts";
import { IUser } from "../utils/type.ts";

function* userLogin({
  payload,
}: {
  type: "LOGIN";
  payload: Pick<IUser, "email" | "password">;
}) {
  const res = yield login(payload);

  yield put({ type: "AUTH", payload: res });
}
function* userRegister({ payload }: { type: "REGISTER"; payload: IUser }) {
  const res = yield register(payload);
  if (res.status === 200) {
    const response = yield login({
      email: payload.email,
      password: payload.password,
    });
    if (response.access_token) {
      yield put({ type: "AUTH", payload: response });
    }
  }
}
function* userLogout() {
  yield put({ type: "AUTH", payload: "" });
}

export default function* rootSaga() {
  yield takeEvery("LOGIN", userLogin);
  yield takeEvery("REGISTER", userRegister);
  yield takeEvery("LOGOUT", userLogout);
}
