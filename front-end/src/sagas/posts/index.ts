import { all, call, put, takeLatest } from "redux-saga/effects";
import * as ACTION_TYPE from "../../types/posts/actionTypes";
import {
  getPostsSuccess,
  getPostsFailure,
  getCreatedPost,
  getDeletedPost,
  getEditedPost,
  getSearchedPosts,
} from "../../actions/posts";
import * as TYPE from "../../types/posts";
import * as api from "../../api/posts";

const getPosts = (pageNumber: Number) => api.getPosts<TYPE.IPost[]>(pageNumber);

const createPost = (data: TYPE.IPostService) =>
  api.createPost<TYPE.IPost>(data);

const deletePost = (data: string) => api.deletePost<TYPE.IPost>(data);

const editPost = (data: TYPE.IPostService, id: string) =>
  api.editPost<TYPE.IPost>(data, id);

const searchPosts = (pageNumber: number, title: string) =>
  api.searchPosts<TYPE.IPost[]>(pageNumber, title);

function* getPostsSaga(action: TYPE.GetPostsRequest) {
  try {
    const {
      data,
      size,
    }: {
      data: TYPE.IPost[];
      size: number;
    } = yield call(getPosts, action.pageNumber);
    yield put(
      getPostsSuccess({
        posts: data,
        size: size,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        getPostsFailure({
          error: error.message,
        })
      );
    }
  }
}

function* createPostSaga(action: TYPE.CreatePostRequest) {
  try {
    const response: TYPE.IPost = yield call(createPost, action.data);

    yield put(
      getCreatedPost({
        post: response,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        getPostsFailure({
          error: error.message,
        })
      );
    }
  }
}

function* deletePostSaga(action: TYPE.DeletePostRequest) {
  try {
    const response: TYPE.IPost = yield call(deletePost, action.id);

    yield put(
      getDeletedPost({
        post: response,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        getPostsFailure({
          error: error.message,
        })
      );
    }
  }
}

function* editPostSaga(action: TYPE.EditPostRequest) {
  try {
    const response: TYPE.IPost = yield call(editPost, action.data, action.id);

    yield put(
      getEditedPost({
        post: response,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        getPostsFailure({
          error: error.message,
        })
      );
    }
  }
}

function* searchPostsSaga(action: TYPE.SearchPostsRequest) {
  try {
    const {
      data,
      size,
    }: {
      data: TYPE.IPost[];
      size: number;
    } = yield call(searchPosts, action.pageNumber, action.title);

    yield put(
      getSearchedPosts({
        posts: data,
        size: size,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        getPostsFailure({
          error: error.message,
        })
      );
    }
  }
}

function* postsSaga() {
  yield all([
    takeLatest(ACTION_TYPE.GET_POSTS_REQUEST, getPostsSaga),
    takeLatest(ACTION_TYPE.ADD_POST_REQUEST, createPostSaga),
    takeLatest(ACTION_TYPE.EDIT_POST_REQUEST, editPostSaga),
    takeLatest(ACTION_TYPE.DELETE_POST_REQUEST, deletePostSaga),
    takeLatest(ACTION_TYPE.SEARCH_POSTS_REQUEST, searchPostsSaga),
  ]);
}

export default postsSaga;
