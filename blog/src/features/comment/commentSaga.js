import { call, put, takeLatest } from "redux-saga/effects";
import commentApi from "../../api/commentApi";
import { commentActions } from "./commentSlice";

function* fetchCommentList() {
    try {
        const response = yield call(commentApi.getAll);
        yield put(commentActions.fetchCommentListSuccess(response));
    } catch (e) {
        console.log("Failed to fetch city list", e);
        yield put(commentActions.fetchCommentListFailed());
    }
}

export default function* commentSaga() {
    yield takeLatest(commentActions.fetchCommentList, fetchCommentList);
}
