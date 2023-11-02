import { all, call, put, takeLatest } from "redux-saga/effects";
import * as ACTION_TYPE from "../../types/posts/actionTypes";
import { getPostsSuccess, getPostsFailure } from "../../actions/posts";
import * as TYPE from "../../types/posts";
import * as api from "../../api/posts";

const getPosts = (pageNumber: Number) => api.getPosts<TYPE.IPost[]>(pageNumber);

function* getPostsSaga(action: TYPE.GetPostsRequest) {
  try {
    const {
      data,
      size,
    }: {
      data: TYPE.IPost[];
      size: number;
    } = yield call(getPosts, action.pageNumber);
    yield put(
      getPostsSuccess({
        posts: data,
        size: size,
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
