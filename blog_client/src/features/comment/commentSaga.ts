import { takeLatest, put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ListParams, ListResponse } from "../../models/common";
import { Comment } from "../../models/comment";
import commentApi from "../../api/commentApi";
import { commentActions } from "./commentSlice";

function* fetchCommentList(action: PayloadAction<number>) {
  try {
    const response: Comment[] = yield call(
      commentApi.getCommentsForPost,
      action.payload
    );
    yield put(commentActions.fetchCommentListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch comment list", error);
    yield put(commentActions.fetchCommentListFailed());
  }
}

export default function* commentSaga() {
  yield takeEvery(commentActions.fetchCommentList, fetchCommentList);
}
