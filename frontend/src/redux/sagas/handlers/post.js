import { call, put } from "redux-saga/effects";
import { requestGetPost } from "../requests/post";
import { setPost } from "../../../features/post/postSlice";

export function* handleGetPost(action) {
    try {
        const response = yield call(requestGetPost);
        const { data } = response;
        yield put(setPost(data));
    } catch (err) {
        console.log(err);
    }
}
