import { all, fork } from "redux-saga/effects";
import { fetchNextPostWatcher, fetchPostWatcher, searchPostWatcher } from "./postSaga";

export default function* rootSaga() {
    yield all([
        fork(fetchPostWatcher),
        fork(fetchNextPostWatcher),
        fork(searchPostWatcher)
    ])
}