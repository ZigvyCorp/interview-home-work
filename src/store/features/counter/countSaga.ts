import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";

function* logAction(action: PayloadAction) {}

function* counterSaga() {
  yield takeEvery("*", logAction);
}

export default counterSaga;
