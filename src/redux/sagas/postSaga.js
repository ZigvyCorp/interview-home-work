import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SET_POSTS } from "../constants/actionTypes";

function* fetchPostsSaga() {
    try {
        // const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
        const response = yield call(axios.get, "http://localhost:3000/posts");
        yield put({ type: SET_POSTS, payload: response.data });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function* postSaga() {
    yield takeLatest("FETCH_POSTS", fetchPostsSaga);
}

export default postSaga;
