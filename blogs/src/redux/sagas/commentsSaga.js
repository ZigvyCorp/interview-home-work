import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
  FETCH_COMMENTS_REQUEST,
} from "../actions/commentsActions";
import axios from "axios";

function* fetchCommentsSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/comments"
    );
    yield put(fetchCommentsSuccess(response.data));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
  }
}

export default function* watchFetchComments() {
  yield takeLatest(FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}
