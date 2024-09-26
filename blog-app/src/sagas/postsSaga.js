import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../redux/postsSlice";
import axios from "axios";

function* fetchPosts() {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:3000/api/user/get-all-post"
    );
    // Adjust your endpoint
    console.log("response", response);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(fetchPostsRequest.type, fetchPosts);
}
