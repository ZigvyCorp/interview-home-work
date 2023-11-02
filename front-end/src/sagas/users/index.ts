import { all, call, put, takeLatest } from "redux-saga/effects";
import * as ACTION_TYPE from "../../types/users/actionTypes";
import * as TYPE from "../../types/users";
import * as api from "../../api/users";
import { getUserFailure, getUserSuccess } from "../../actions/users";

const getUser = (id: string) => api.getUserById<TYPE.IUser>(id);

function* getUserSaga(action: TYPE.GetUserRequest) {
  try {
    const response: TYPE.IUser = yield call(getUser, action.id);
    yield put(
      getUserSuccess({
        user: response,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        getUserFailure({
          error: error.message,
        })
      );
    }
  }
}

function* userSaga() {
  yield all([takeLatest(ACTION_TYPE.GET_USER_REQUEST, getUserSaga)]);
}

export default userSaga;
