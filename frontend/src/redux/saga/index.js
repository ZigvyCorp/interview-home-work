import { put, takeEvery } from "redux-saga/effects";
import { persistor } from "../store";
import { REHYDRATE } from "redux-persist/lib/constants";
import { SET_POSTS } from "../constant";

function* persistorPost({ payload }) {
    yield put({ type: SET_POSTS, payload: payload });
    yield persistor.flush();
}

export function* rootSaga() {
    yield takeEvery(REHYDRATE, persistorPost);
}