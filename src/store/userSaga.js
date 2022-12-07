import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
} from "../redux/constants/userConstant";
import { BASE_URL } from "../utils/BaseUrl";

function userFetch() {
  return fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  }).then((res) =>
    res.json().catch((err) => {
      throw err;
    })
  );
}

function* workGetUserFetch() {
  try {
    const users = yield call(userFetch);
    yield put({ type: GET_USERS_SUCCESS, users: users });
  } catch (err) {
    throw err;
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUserFetch);
}

export default userSaga;
