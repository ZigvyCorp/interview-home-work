import { all, fork } from "redux-saga/effects";
import postSaga from "./post";

function* rootSaga() {
    yield all([fork(postSaga)]);
}
export default rootSaga;
