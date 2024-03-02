import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
  FETCH_POST_BY_ID_REQUEST,
  FETCH_COMMENTS_BY_POST_ID_REQUEST,
  FETCH_COMMENTS_REQUEST,
  fetchPostByIdSuccess,
  fetchPostByIdFailure,
  fetchCommentsByPostIdSuccess,
  fetchCommentsByPostIdFailure,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  fetchPostsByKeywordSuccess,
  fetchPostsByKeywordFailure,
  FETCH_POSTS_BY_KEYWORD_REQUEST,
} from '../actions/actions';
import {
  getAllComments,
  getAllPosts,
  getCommentsByPostId,
  getPostById,
  getPostsByKeyword,
} from '../../api/posts';

function* fetchPostsSaga() {
  try {
    const posts = yield call(getAllPosts);
    // console.log(posts);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

function* fetchPostsByKeywordSaga(action) {
  try {
    const posts = yield call(getPostsByKeyword, action.payload);
    // console.log(posts);
    yield put(fetchPostsByKeywordSuccess(posts));
  } catch (error) {
    yield put(fetchPostsByKeywordFailure(error));
  }
}

function* fetchPostByIdSaga(action) {
  try {
    const post = yield call(getPostById, action.payload);
    yield put(fetchPostByIdSuccess(post));
  } catch (error) {
    yield put(fetchPostByIdFailure(error));
  }
}

function* fetchCommentsByPostIdSaga(action) {
  try {
    const comments = yield call(getCommentsByPostId, action.payload);
    yield put(fetchCommentsByPostIdSuccess(comments));
  } catch (error) {
    yield put(fetchCommentsByPostIdFailure(error));
  }
}

function* fetchCommentsSaga() {
  try {
    const comments = yield call(getAllComments);
    yield put(fetchCommentsSuccess(comments));
  } catch (error) {
    yield put(fetchCommentsFailure(error));
  }
}

export function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export function* watchFetchPostsByKeyword() {
  yield takeEvery(FETCH_POSTS_BY_KEYWORD_REQUEST, fetchPostsByKeywordSaga);
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POST_BY_ID_REQUEST, fetchPostByIdSaga);
}

export function* watchFetchComments() {
  yield takeEvery(FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}

export function* watchFetchCommentsByPostId() {
  yield takeEvery(FETCH_COMMENTS_BY_POST_ID_REQUEST, fetchCommentsByPostIdSaga);
}
