import { call, fork, put, takeLatest } from "redux-saga/effects";
import { searchPostsByTitle } from "../../api/api";
import {
  searchPostsFailure,
  searchPostsStart,
  searchPostsSuccess,
} from "../slices/searchPostslice";

function* searchPosts({ payload }) {
  try {
    const { searchTerm } = payload;
    const posts = yield call(searchPostsByTitle, searchTerm);

    yield put(searchPostsSuccess(posts));
  } catch (error) {
    yield put(searchPostsFailure(error));
  }
}

function* watchSearchPosts() {
  yield takeLatest(searchPostsStart.type, searchPosts);
}

export const searchPostsSaga = [fork(watchSearchPosts)];
