import { call, put, takeLatest } from "redux-saga/effects";

import { setPosts, setError } from "./posts.action";
import { IPost } from "src/constant/resource.constant";
import { Types } from "./posts.constant";
import { getPosts } from "src/services/posts.service";
import { AxiosError } from "axios";

export function* watchLoadPosts() {
  try {
    const data: IPost[] = yield call(getPosts);
    yield put(setPosts(data));
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      // Handle HTTP response errors
      yield put(
        setError(`Request failed with status code: ${err.response.status}`)
      );
    } else if (err.message) {
      // Handle network errors or other exceptions
      yield put(setError(err.message));
    } else {
      // Handle other error cases
      yield put(setError("An unknown error occurred"));
    }
  }
}

export default function* root() {
  yield takeLatest(Types.LOAD_POSTS, watchLoadPosts);
}
