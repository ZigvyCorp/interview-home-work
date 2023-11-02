import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SET_COMMENTS } from "../constants/actionTypes";

function* fetchCommentsSaga(action) {
    try {
        // const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`);
        const response = yield call(axios.get, `http://localhost:3000/comments`);
        yield put({ type: SET_COMMENTS, payload: response.data });
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}

function* commentSaga() {
    yield takeLatest("FETCH_COMMENTS", fetchCommentsSaga);
}

export default commentSaga;
