import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  FETCH_POSTS,
  FETCH_POST,
  setPosts,
  setSelectedPost,
  setLoading,
  FETCH_MORE_POSTS_REQUEST,
  FETCH_USERS,
  setUsers,
  setComments,
  FETCH_COMMENTS,
} from "./actions";
import {
  fetchPostApi,
  fetchPostsApi,
  fetchUSers,
  fetchComments,
} from "../../../apis/posts";

function* fetchPostsSaga() {
  try {
    yield put(setLoading(true));
    const posts = yield call(fetchPostsApi);
    yield put(setPosts(posts));
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    yield put(setLoading(false));
  }
}

function* fetchCommentsSaga() {
  try {
    const comments = yield call(fetchComments);
    yield put(setComments(comments));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function* fetchPostSaga(action) {
  try {
    yield put(setLoading(true));
    const post = yield call(fetchPostApi, action.postId);
    yield put(setSelectedPost(post));
  } catch (error) {
    console.error("Error fetching post:", error);
  }
  finally {
    yield put(setLoading(false));
  }
}

function* fetchUsers(action) {
  try {
    const users = yield call(fetchUSers);
    yield put(setUsers(users));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(FETCH_POST, fetchPostSaga);
  yield takeLatest(FETCH_USERS, fetchUsers);
  yield takeLatest(FETCH_COMMENTS, fetchCommentsSaga);
}
