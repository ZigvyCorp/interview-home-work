import { all } from "redux-saga/effects";
import { postsSaga } from "./redux-saga/postsSaga";

export default function* rootSaga() {
    yield all([...postsSaga]);
}
