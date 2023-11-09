import { all, fork } from "redux-saga/effects";
import postSaga from "./sagas/postSaga";

export function* rootSaga() {
	yield all([fork(postSaga)]);
}
