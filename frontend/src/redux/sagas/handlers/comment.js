import { call, put } from "redux-saga/effects";
import { requestGetComment } from "../requests/comment";
import { setComment } from "../../../features/comment/commentSlice";

export function* handleGetComment(action) {
    try {
        const response = yield call(requestGetComment);
        const { data } = response;
        yield put(setComment(data));
    } catch (err) {
        console.log(err);
    }
}
