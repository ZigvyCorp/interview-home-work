import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from "./posts.reducer";
import { getPosts } from "services/posts.service";

export function* fetchPostsSaga({ payload }) {
  try {
    const posts = yield call(() => getPosts(payload));
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

export function* watchFetchPostsSaga() {
  yield takeLatest(fetchPostsRequest().type, fetchPostsSaga);
}
