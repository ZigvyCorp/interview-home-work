import { call, put, takeLatest } from "redux-saga/effects";
import { getAllPosts } from "../../services/postService";
import { ActionTypes } from "../actions/postActions";

function* fetchPosts() {
  try {
    const posts = yield call(getAllPosts);
    yield put({ type: ActionTypes.FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    console.log(error);
    yield put({ type: ActionTypes.FETCH_POSTS_FAILURE, payload: error });
  }
}

function* watchFetchPosts() {
  yield takeLatest(ActionTypes.FETCH_POSTS_REQUEST, fetchPosts);
}

export default function* postsSaga() {
  yield watchFetchPosts();
}
