import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";

function* logAction(action: PayloadAction) {
  yield console.log("🚀 ~ function*logAction ~ action:", action);
}

function* counterSaga() {
  console.log("counter saga");
  yield takeEvery("*", logAction);
}

export default counterSaga;
