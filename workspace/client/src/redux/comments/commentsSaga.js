import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCommentsFailure,
  fetchCommentsStart,
  fetchCommentsSuccess,
} from "./commentsSlice";
import { fetchComments } from "../../api";

function* fetchCommentsSaga(action) {
  try {
    const { skip, limit, postId } = action.payload;
    const comments = yield call(fetchComments, limit, skip, postId);
    yield put(fetchCommentsSuccess(comments));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
  }
}

export function* watchFetchComments() {
  yield takeLatest(fetchCommentsStart.type, fetchCommentsSaga);
}
