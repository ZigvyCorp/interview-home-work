import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SET_USERS } from "../constants/actionTypes";

function* fetchUsersSaga() {
    try {
        // const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
        const response = yield call(axios.get, "http://localhost:3000/users");
        yield put({ type: SET_USERS, payload: response.data });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function* userSaga() {
    yield takeLatest("FETCH_USERS", fetchUsersSaga);
}

export default userSaga;
