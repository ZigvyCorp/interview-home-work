import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPostFailure, fetchPostSuccess } from "../features/posts/actions";
import { fetchUserFailure, fetchUserSuccess } from "../features/users/actions";
import {
  fetchCommentFailure,
  fetchCommentSuccess,
} from "../features/comments/actions";
import { FETCH_POST_REQUEST } from "../features/posts/actionTypes";
import { FETCH_USER_REQUEST } from "../features/users/actionTypes";
import { FETCH_COMMENT_REQUEST } from "../features/comments/actionTypes";

function* fetchPost(action) {
  const { apiEndpoint } = action.payload;
  const apiUrl = `http://localhost:8880/api/${apiEndpoint}`;
  try {
    const response = yield call(fetch, apiUrl);
    const data = yield response.json();
    yield put(fetchPostSuccess(data));
  } catch (error) {
    yield put(fetchPostFailure(error));
  }
}
function* fetchUser(action) {
  const { apiEndpoint } = action.payload;
  const apiUrl = `http://localhost:8880/api/${apiEndpoint}`;
  try {
    const response = yield call(fetch, apiUrl);
    const data = yield response.json();
    yield put(fetchUserSuccess(data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}
function* fetchComment(action) {
  const { apiEndpoint } = action.payload;
  const apiUrl = `http://localhost:8880/api/${apiEndpoint}`;
  try {
    const response = yield call(fetch, apiUrl);
    const data = yield response.json();
    yield put(fetchCommentSuccess(data));
  } catch (error) {
    yield put(fetchCommentFailure(error));
  }
}

export function* watchFetchData() {
  yield takeEvery(FETCH_POST_REQUEST, fetchPost);
  yield takeEvery(FETCH_USER_REQUEST, fetchUser);
  yield takeEvery(FETCH_COMMENT_REQUEST, fetchComment);
}
