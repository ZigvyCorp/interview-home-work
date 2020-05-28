import { takeLatest, call, put, delay } from "redux-saga/effects";
import { toast } from "react-toastify";

import * as actionTypes from "../utils/action-types";
import {
  showLoading,
  hideLoading,
  fetchPostsSuccess,
  fetchPostsFailed,
  fetchUserSuccess,
  fetchUserFailed,
  fetchUsersSuccess,
  fetchUsersFailed,
  setTotalPosts,
  fetchPostSuccess,
  fetchPostFailed,
  fetchCommentSuccess,
  fetchUpdatedPostSuccess,
} from "../actions";
import { fetchPosts, fetchUsers, fetchUser, createPost, updatePost, deletePost, createComment, updateComment, registerUser, updateUser, fetchPost, deleteComment, fetchTotalPosts } from "../api";
import { TOKEN } from "../utils/constant";

function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_USERS, fetchUsersSaga);
  yield takeLatest(actionTypes.FETCH_USER, fetchUserSaga);
  yield takeLatest(actionTypes.CREATE_USER, createUserSaga);
  yield takeLatest(actionTypes.UPDATE_USER, updateUserSaga);

  yield takeLatest(actionTypes.FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(actionTypes.FETCH_POST, fetchPostSaga);
  yield takeLatest(actionTypes.CREATE_POST, createPostSaga);
  yield takeLatest(actionTypes.UPDATE_POST, updatePostSaga);
  yield takeLatest(actionTypes.DELETE_POST, deletePostSaga);

  yield takeLatest(actionTypes.CREATE_COMMENT, createCommentSaga);
  yield takeLatest(actionTypes.UPDATE_COMMENT, updateCommentSaga);
  yield takeLatest(actionTypes.DELETE_COMMENT, deleteCommentSaga);
}

function* fetchPostsSaga({ options }) {
  yield put(showLoading());
  try {
    const { data } = yield call(fetchPosts, options);
    const response = yield call(fetchTotalPosts, options);

    if (!data.error) {
      yield put(fetchPostsSuccess(data));
      yield put(setTotalPosts(response.data));
    } else {
      yield put(fetchPostsFailed());
      toast.error(data.error);
    }
  } catch (e) {
    console.log(e);
    yield put(fetchPostsFailed());
    toast.error("Sorry, fetch posts failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* fetchPostSaga({ id }) {
  yield put(showLoading());
  try {
    const { data } = yield call(fetchPost, id);
    if (!data.error) {
      yield put(fetchPostSuccess(data));
    } else {
      yield put(fetchPostFailed());
      toast.error(data.error);
    }
  } catch (e) {
    console.log(e);
    yield put(fetchPostFailed());
    toast.error("Sorry, fetch post failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* fetchUsersSaga() {
  yield put(showLoading());
  try {
    const { data } = yield call(fetchUsers);
    if (!data.error) {
      yield put(fetchUsersSuccess(data));
    } else {
      yield put(fetchUsersFailed());
      toast.error("Sorry, fetch user list failed!");
    }
  } catch (e) {
    console.log(e);
    yield put(fetchUsersFailed());
    toast.error("Sorry, fetch user list failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* fetchUserSaga({ username, password }) {
  yield put(showLoading());
  try {
    const { data } = yield call(fetchUser, username, password);
    if (!data.error) {
      const { token, user } = data;
      localStorage.setItem(TOKEN, token);
      yield put(fetchUserSuccess(user));
      toast.success(`Hi, ${user.name}!`);

    } else {
      toast.error(data.error);
      yield put(fetchUserFailed());
    }
  } catch (e) {
    console.log(e);
    yield put(fetchUserFailed());
    toast.error(e.message);
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* createPostSaga({post}) {
  yield put(showLoading());
  try {
    const { data } = yield call(createPost, post);
    if (!data.error) {
      yield put(fetchUpdatedPostSuccess(data));
      toast.success("Created successfully!");
    } else {
      toast.error(data.error);
    }
  } catch (e) {
    console.log(e);
    toast.error("Created failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* updatePostSaga({post}) {
  yield put(showLoading());
  try {
    const { data } = yield call(updatePost, post);
    console.log(data);
    if (!data.error) {
      yield put(fetchUpdatedPostSuccess(data));
      toast.success("Updated successfully!");
    } else {
      toast.error(data.error);
    }
  } catch (e) {
    console.log(e);
    toast.error("Updated failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* deletePostSaga({post}) {
  yield put(showLoading());
  try {
    const { data } = yield call(deletePost, post);
    if (!data.error) {
      yield put(fetchUpdatedPostSuccess(data));
      toast.success("Deleted successfully!");
    } else {
      toast.error("Deleted failed!");
    }
  } catch (e) {
    console.log(e);
    toast.error("Deleted failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* createCommentSaga({comment}) {
  yield put(showLoading());
  try {
    const { data } = yield call(createComment, comment);
    if (!data.error) {
      toast.success("Created successfully!");
      yield put(fetchCommentSuccess(data));
    } else {
      toast.error("Created failed!");
    }
  } catch (e) {
    console.log(e);
    toast.error("Created failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* updateCommentSaga({comment}) {
  yield put(showLoading());
  try {
    const { data } = yield call(updateComment, comment);
    if (!data.error) {
      toast.success("Updated successfully!");
      yield put(fetchCommentSuccess(data));
    } else {
      toast.error("Updated failed!");
    }
  } catch (e) {
    console.log(e);
    toast.error("Updated failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* deleteCommentSaga({comment}) {
  yield put(showLoading());
  try {
    const { data } = yield call(deleteComment, comment);
    if (!data.error) {
      toast.success("Deleted successfully!");
      yield put(fetchCommentSuccess(data));
    } else {
      toast.error("Deleted failed!");
    }
  } catch (e) {
    console.log(e);
    toast.error("Deleted failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* createUserSaga({ user }) {
  yield put(showLoading());
  try {
    const { data } = yield call(registerUser, user);
    if (!data.error) {
      toast.success("Created successfully!");
    } else {
      toast.error("Created failed!");
    }
  } catch (e) {
    console.log(e);
    toast.error("Created failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* updateUserSaga({user}) {
  yield put(showLoading());
  try {
    const { data } = yield call(updateUser, user);
    if (!data.error) {
      yield put(fetchUserSuccess(data));
      toast.success("Updated successfully!");
    } else {
      toast.error("Updated failed!");
    }
  } catch (e) {
    console.log(e);
    toast.error("Updated failed!");
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

export default rootSaga;
