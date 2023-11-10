import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data.posts));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data.newPost));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* fetchCommentsSaga(action) {
  try {
    const comments = yield call(api.fetchComments);
    yield put(actions.getComments.getCommentsSuccess(comments.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.CommentsFailure(err));
  }
}

function* createCommentSaga(action) {
  try {
    const comments = yield call(api.createComment, action.payload);
    yield put(
      actions.createComment.createCommentSuccess(comments.data.newComment)
    );
  } catch (err) {
    console.error(err);
    yield put(actions.createComment.createCommentFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* loginSaga(action) {
  try {
    const user = yield call(api.login, action.payload);
    yield put(actions.login.getLoginSuccess(user.data.user));
  } catch (err) {
    console.error(err);
    yield put(actions.login.getLoginFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.getComments.getCommentsRequest, fetchCommentsSaga);
  yield takeLatest(
    actions.createComment.createCommentRequest,
    createCommentSaga
  );
  yield takeLatest(actions.login.getLoginRequest, loginSaga);
}

export default mySaga;
