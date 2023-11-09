import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../redux/postsSlice';

function* fetchApiData() {
  try {
    yield call(fetchPostsRequest());
    const res = yield call(fetch, '/api/posts');
    const data = yield call([res, res.json()]);
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

function* apiSaga() {
  yield takeLatest('posts/fetchPostsRequest', fetchApiData);
}

export default apiSaga;
