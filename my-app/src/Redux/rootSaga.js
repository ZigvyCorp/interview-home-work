import {call, put, all} from "redux-saga/effects"
import { getPost, getComment, getUser } from "./dataSlice";
function* fetchPost() {
  const Posts = yield call (() => fetch("https://jsonplaceholder.typicode.com/posts"));
  const formattedPosts = yield Posts.json();
  yield put(getPost(formattedPosts));
}

function* fetchComment() {
  const Comments = yield call (() => fetch("https://jsonplaceholder.typicode.com/comments"));
  const formattedComments = yield Comments.json();
  yield put(getComment(formattedComments));
}

function* fetchUser() {
  const Users = yield call (() => fetch("https://jsonplaceholder.typicode.com/users"));
  const formattedUsers = yield Users.json();
  yield put(getUser(formattedUsers));
}

export default function* rootSaga() {
  yield all([fetchPost(),fetchComment(),fetchUser()])
}