// sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from './actions/action';

function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

function* postsSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default postsSaga;