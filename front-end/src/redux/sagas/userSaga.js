import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_USER_BY_ID_REQUEST,
  FETCH_USERS_REQUEST,
  fetchUserByIdSuccess,
  fetchUserByIdFailure,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '../actions/actions';
import { getAllUsers, getUserById } from '../../api/users';

function* fetchUserByIdSaga(action) {
  try {
    const post = yield call(getUserById, action.payload);
    yield put(fetchUserByIdSuccess(post));
  } catch (error) {
    yield put(fetchUserByIdFailure(error));
  }
}

function* fetchUsersSaga() {
  try {
    const users = yield call(getAllUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export function* watchFetchUserById() {
  yield takeEvery(FETCH_USER_BY_ID_REQUEST, fetchUserByIdSaga);
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}
