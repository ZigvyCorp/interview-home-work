import { call, put, takeLatest } from "redux-saga/effects";
import userApi from "../../api/userApi";
import { userActions } from "./userSlice";

function* fetchUserList() {
    try {
        const response = yield call(userApi.getAll);
        yield put(userActions.fetchUserListSuccess(response));
    } catch (e) {
        console.log("Failed to fetch city list", e);
        yield put(userActions.fetchUserListFailed());
    }
}

export default function* userSaga() {
    yield takeLatest(userActions.fetchUserList, fetchUserList);
}
