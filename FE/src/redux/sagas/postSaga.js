import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPostsSuccess } from '../Reducers/postSlice';

import { getListPosts } from '../apis/postApi';

function* fetchPostsSaga() {
  try {
    const res = yield call(getListPosts);
    yield put(fetchPostsSuccess(res.data));
  } catch (e) {
    console.error(e);
  }
}
export function* watchFetchPosts() {
  yield takeEvery('post/fetchPost', fetchPostsSaga);
}
