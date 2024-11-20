import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchUserFailure,
  fetchUserSuccess,
  fetchUsersStart,
} from '../redux/usersSlice';

const BASE_URL = 'http://localhost:5000/api';

function* fetchPostsData() {
  try {
    const response = yield call(axios.get, `${BASE_URL}/users`);
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(fetchUsersStart.type, fetchPostsData);
}
