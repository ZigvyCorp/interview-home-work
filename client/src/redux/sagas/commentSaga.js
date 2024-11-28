import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
  FETCH_COMMENTS_REQUEST,
} from "../actions/commentActions";

const API_URL = "http://localhost:5000";

function fetchCommentsApi(postId) {
  console.log(`${API_URL}/comments?postId=${postId}`);
  return fetch(`${API_URL}/comments?postId=${postId}`).then((response) =>
    response.json()
  );
}

function* fetchCommentsSaga(action) {
  try {
    const comments = yield call(fetchCommentsApi, action.payload);
    yield put(fetchCommentsSuccess(comments));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
  }
}

export function* watchFetchComments() {
  yield takeLatest(FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}
