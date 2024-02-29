import { call, put, takeLatest } from 'redux-saga/effects';
import { getPosts, getComments } from '../util/js/APIs.js';

function* watchGetPosts() {
  const result = yield call(getPosts);
  yield put({ type: 'SET_GLOBAL_LOADING', payload: false });
  if (result && result.status === 200) {
    yield put({ type: 'SET_POSTS', payload: result?.data });
  }
}

function* watchGetComments() {
  const result = yield call(getComments);
  yield put({ type: 'SET_GLOBAL_LOADING', payload: false });
  if (result && result.status === 200) {
    yield put({ type: 'SET_COMMENT', payload: result?.data });
  }
}

function* Saga() {
  yield takeLatest('GET_POSTS', watchGetPosts);
  yield takeLatest('GET_COMMENT', watchGetComments);
}

export default Saga;
