import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from '../actions/postActions';

function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:4000/api/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default rootSaga;
