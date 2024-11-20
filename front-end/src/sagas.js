import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_COMMENTS_FETCH,
  GET_COMMENTS_SUCCESS,
  GET_POSTS_FETCH,
  GET_POSTS_SUCCESS,
  GET_POST_DETAIL_FETCH,
  GET_POST_DETAIL_SUCCESS,
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
} from "./actions";
import postsAPI from "./services/posts.services";
import commentsAPI from "./services/comments.services";
import usersAPI from "./services/users.services";

function* workGetPostsFetch({ data }) {
  const posts = yield call(postsAPI.postsFetch, data);
  posts.search = data.search;
  yield put({ type: GET_POSTS_SUCCESS, posts });
}

function* workGetCommentsFetch() {
  const comments = yield call(commentsAPI.commentsFetch);
  yield put({ type: GET_COMMENTS_SUCCESS, comments });
}

function* workGetUsersFetch() {
  const users = yield call(usersAPI.usersFetch);
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* workGetPostDetailFetch({ id }) {
  const postDetail = yield call(postsAPI.postDetailFetch, id);
  yield put({ type: GET_POST_DETAIL_SUCCESS, postDetail });
}

function* mySaga() {
  yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch);
  yield takeEvery(GET_COMMENTS_FETCH, workGetCommentsFetch);
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
  yield takeEvery(GET_POST_DETAIL_FETCH, workGetPostDetailFetch);
}

export default mySaga;
