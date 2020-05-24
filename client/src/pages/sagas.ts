import { put, takeEvery, delay } from 'redux-saga/effects';
import { getPostsSuccess, getPostsFail, getPosts } from './actions';
import { dataPosts } from './data';

function* getPostSagas() {
  try {
    const data = dataPosts;
    // goi api o day ne con di
    yield delay(1000);
    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsFail(error));
  }
}

export function* watchGetPosts() {
  yield takeEvery(getPosts().type, getPostSagas);
}
