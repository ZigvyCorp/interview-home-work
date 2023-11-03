import { call, put, takeLatest } from "redux-saga/effects";
import { setUsers, setUserError } from "./users.action";
import { IUser } from "src/constant/resource.constant";
import { Types } from "./users.constant";
import { AxiosError } from "axios";
import { getUsers } from "src/services/users.service";

export function* watchLoadUsers() {
  try {
    const data: IUser[] = yield call(getUsers);
    yield put(setUsers(data));
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      // Handle HTTP response errors
      yield put(
        setUserError(`Request failed with status code: ${err.response.status}`)
      );
    } else if (err.message) {
      // Handle network errors or other exceptions
      yield put(setUserError(err.message));
    } else {
      // Handle other error cases
      yield put(setUserError("An unknown error occurred"));
    }
  }
}

export default function* root() {
  yield takeLatest(Types.LOAD_USERS, watchLoadUsers);
}
