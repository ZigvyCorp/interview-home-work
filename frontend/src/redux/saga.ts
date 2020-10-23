import { takeLatest } from "redux-saga/effects";
import { PostActions } from "./post/actions";
import { getPosts } from "./post/effects";

export function* saga() {
  yield takeLatest(PostActions.GET_POSTS, getPosts);
}
