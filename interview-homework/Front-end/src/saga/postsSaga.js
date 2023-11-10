import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostsStart,
} from '../redux/postsSlice';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

function* fetchPostsData() {
  try {
    const response = yield call(axios.get, `${BASE_URL}/posts`);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(fetchPostsStart.type, fetchPostsData);
}
