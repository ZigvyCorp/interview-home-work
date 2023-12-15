import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "interfaces/comment";
import { CREATE_COMMENT } from "../types/comment";
import { createCommentSuccess } from "../reducers/comment";
import { createComment } from "src/api/comment";

function* createCommentSaga(action: PayloadAction<Omit<IComment, "id">>) {
  yield call(createComment, action.payload);
  yield put(createCommentSuccess());
}

export function* watchCreateCommentSaga() {
  yield takeLatest(CREATE_COMMENT, createCommentSaga);
}
