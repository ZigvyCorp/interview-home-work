import { call, put, takeEvery } from "redux-saga/effects";
import postApi from "../../apis/postApi";
import {
  createPostFailure,
  createPostSuccess,
  getPostFailure,
  getPostSucces,
} from "../actions/postActions";
import { CREATE_POST, GET_POSTS } from "../actions/actions";
import { CreatePost } from "../../types/Post/types";
import { notification } from "antd";

interface CreatePostAction {
  type: string;
  payload: CreatePost;
}

interface FetchPostAction {
    type: string
    payload: {
        page: number,
        search: string
    }
}

function* fetchPostSaga(action: FetchPostAction) {
  try {
    console.log(action)
    const { page, search } = action.payload
    const { data: posts } = yield call(postApi.fetchPost, { page, search});
    console.log(posts)
    yield put(getPostSucces(posts));

  } catch (error) {
    yield put(getPostFailure());
  }
}

function* createPostSaga(action: CreatePostAction) {
  try {
    const { data: post } = yield call(postApi.createPost, action.payload);
    yield put(createPostSuccess(post));
    notification.success({
      message: "Successfully create post",
    });
  } catch (error) {
    yield put(createPostFailure());
  }
}

function* postSaga() {
  yield takeEvery(GET_POSTS, fetchPostSaga);
  yield takeEvery(CREATE_POST, createPostSaga);
}

export default postSaga;
