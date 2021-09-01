import { takeLatest } from "redux-saga/effects";
import { handleGetPosts } from "./handles/posts";
import { GET_POSTS } from "../reducers/posts";
import { handleGetUsers } from "./handles/users";
import { GET_USERS } from "../reducers/users";
import { handleGetComments } from "../sagas/handles/comments";
import { GET_COMMENTS } from "../reducers/comments";

export function* watcherSaga() {
  yield takeLatest(GET_POSTS, handleGetPosts);
  yield takeLatest(GET_USERS, handleGetUsers);
  yield takeLatest(GET_COMMENTS, handleGetComments);
}
