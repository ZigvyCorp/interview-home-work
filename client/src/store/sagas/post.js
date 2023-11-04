import { call, put, takeLatest } from "redux-saga/effects";
import { GET_POSTS, getPostsSuccess, getPostsFailure } from "../actions/post";
import { fetchPostsFromAPI } from "../../apis/post";

function* fetchPostsSaga(action) {
  try {
    const postsData = yield call(fetchPostsFromAPI, action.payload);
    yield put(getPostsSuccess({
      posts: postsData?.data,
      pagination: postsData?.pagination
    }));
  } catch (error) {
    yield put(getPostsFailure(error));
  }
}

export function* postSaga() {
  yield takeLatest(GET_POSTS, fetchPostsSaga);
}
