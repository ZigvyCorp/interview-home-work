import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPostFailure,
  fetchPostsFailure,
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostStart,
  fetchPostSuccess,
} from "./postsSlice";
import { fetchPost, fetchPosts } from "../../api";

function* fetchPostsSaga(action) {
  try {
    const { skip, limit } = action.payload;
    const posts = yield call(fetchPosts, limit, skip);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}
function* fetchPostSaga(action) {
  try {
    const id = action.payload;
    const post = yield call(fetchPost, id);
    yield put(fetchPostSuccess(post));
  } catch (error) {
    yield put(fetchPostFailure(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(fetchPostsStart.type, fetchPostsSaga);
  yield takeLatest(fetchPostStart.type, fetchPostSaga);
}
