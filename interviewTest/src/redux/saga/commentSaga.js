import { call, fork, put, takeLatest } from "redux-saga/effects";
import { getCommentsApi } from "../../api/api";
import {
  getCommentsFailure,
  getCommentsStart,
  getCommentsSuccess,
} from "../slices/commentSlice";

function* getComments({ payload }) {
  try {
    const { postId } = payload;
    console.log("getComments", postId);
    const comments = yield call(getCommentsApi, postId);
    yield put(getCommentsSuccess(comments.data));
  } catch (error) {
    yield put(getCommentsFailure(error));
  }
}

function* watchGetComments() {
  yield takeLatest(getCommentsStart.type, getComments);
}

export const commentSaga = [fork(watchGetComments)];
