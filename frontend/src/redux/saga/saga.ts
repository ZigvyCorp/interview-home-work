import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

export const fetchPostAsync = createAction('post/fetch');

function* fetchPostSaga(action: PayloadAction<any>) {
  
}

export function* postSaga() {
  yield takeLatest(fetchPostAsync, fetchPostSaga);
}