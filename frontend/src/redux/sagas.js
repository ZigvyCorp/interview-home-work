import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from './postsSlice';

function fetchPostsSaga() {
  try {
    const response = yield call(axios.get, '/api/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export default function rootSaga() {
  yield takeLatest(fetchPostsRequest.type, fetchPostsSaga);
}
