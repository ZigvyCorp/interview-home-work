import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_POST, FETCH_POSTS, SEARCH_POSTS, setPost, setPosts } from "../actions/postActions";
import { getPosts, searchPosts, getPostById } from "../../api/postAPI";

function* fetchPostsSaga(action) {
  try {
    const response = yield call(getPosts, action.page);
    yield put(setPosts(response.data));
  } catch (error) {
    // Handle error
  }
}
function* fetchPostSaga(action) {
  try {
    const response = yield call(getPostById, action.id);
    yield put(setPost(response.data));
  } catch (error) {
    // Handle error
  }
}

function* searchPostsSaga(action) {
  try {
    const response = yield call(searchPosts, action.title);
    yield put(setPosts(response.data));
  } catch (error) {
    // Handle error
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
}
export function* watchFetchPost() {
  yield takeLatest(FETCH_POST, fetchPostSaga);
}

export function* watchSearchPosts() {
  yield takeLatest(SEARCH_POSTS, searchPostsSaga);
}
