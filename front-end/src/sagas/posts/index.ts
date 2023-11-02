import { all, call, put, takeLatest } from "redux-saga/effects";
import * as ACTION_TYPE from "../../types/posts/actionTypes";
import { getPostsSuccess, getPostsFailure } from "../../actions/posts";
import * as TYPE from "../../types/posts";
import * as api from "../../api/posts";

const getPosts = () => api.getPosts<TYPE.IPost[]>();

function* getPostsSaga() {
  try {
    const response: TYPE.IPost[] = yield call(getPosts);
    yield put(
      getPostsSuccess({
        posts: response,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        getPostsFailure({
          error: error.message,
        })
      );
    }
  }
}

function* postsSaga() {
  yield all([takeLatest(ACTION_TYPE.GET_POSTS_REQUEST, getPostsSaga)]);
}

export default postsSaga;
