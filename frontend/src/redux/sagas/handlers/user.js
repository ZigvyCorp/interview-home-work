import { call, put } from "redux-saga/effects";
import { setPost } from "../../../features/post/postSlice";
import { requestGetUser } from "../requests/user";
import { setUser } from "../../../features/user/userSlice";

export function* handleGetUser(action) {
    try {
        const response = yield call(requestGetUser);
        const { data } = response;
        yield put(setUser(data));
    } catch (err) {
        console.log(err);
    }
}
