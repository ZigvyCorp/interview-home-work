import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPostsSuccess,
  fetchPostsFailure,
  FETCH_POSTS_REQUEST,
} from "../actions/postActions";

const API_URL = "http://localhost:5000";

function fetchPostsApi(page, limit) {
  return fetch(`${API_URL}/posts?page=${page}&pageSize=${limit}`).then(
    (response) => response.json()
  );
}

function* fetchPostsSaga(action) {
  try {
    const { page, limit } = action.payload;
    const posts = yield call(fetchPostsApi, page, limit);
    yield put(fetchPostsSuccess(posts)); // Dispatch success action
  } catch (error) {
    yield put(fetchPostsFailure(error.message)); // Dispatch failure action
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}
