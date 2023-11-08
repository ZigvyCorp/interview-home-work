import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { Post } from "../../utils/type";
import { fetchPostFailure, fetchPostSuccess } from "../actions/postsActions";
import { postTypes } from "../actions-types/postTypes";

const baseUrl = "https://jsonplaceholder.typicode.com";

const getPost = () => axios.get<Post[]>(baseUrl + "/posts");

function* fetchPostSaga(): any {
  try {
    const response = yield call(getPost);
    yield put(
      fetchPostSuccess({
        posts: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostFailure({
        error: e.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostSaga)]);
}

export default postsSaga;
