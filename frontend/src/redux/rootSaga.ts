import { all } from "redux-saga/effects";
import { postSaga } from "./posts/postSaga";

export default function* rootSaga() {
    yield all([postSaga()]);
}