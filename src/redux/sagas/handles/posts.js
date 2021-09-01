import { call, put } from "redux-saga/effects";
import { setPosts } from "../../reducers/posts";
import { requestGetPosts } from "../request/posts";

export function* handleGetPosts(action) {
  try {
    const response = yield call(requestGetPosts);
    const { data } = response;
    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}