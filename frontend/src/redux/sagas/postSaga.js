import { put, select, takeLatest } from "redux-saga/effects";
import {
  createCommentApi,
  createPostApi,
  getListPostApi,
} from "../../apis/postApi";
import {
  COMMENT_FETCH,
  CREATE_NEW_COMMENT_FAILED,
  CREATE_NEW_COMMENT_REQUEST,
  CREATE_NEW_COMMENT_SUCCEED,
  CREATE_NEW_POST_FAILED,
  CREATE_NEW_POST_REQUEST,
  CREATE_NEW_POST_SUCCEED,
  POST_FETCH,
  POST_FETCH_FAILED,
  POST_FETCH_LOAD_MORE,
  POST_FETCH_LOAD_MORE_FAILED,
  POST_FETCH_LOAD_MORE_SUCCEED,
  POST_FETCH_SUCCEED,
  POST_LOADING_ON,
} from "../types/postType";

const getPostState = (state) => state.post;

function* createPost(action) {
  try {
    yield put({
      type: POST_LOADING_ON,
    });
    let createPostCall = yield createPostApi(
      action.payload.title,
      action.payload.content,
      action.payload.tags
    );
    action.payload.callback("create new post successful");
    yield put({
      type: CREATE_NEW_POST_SUCCEED,
      payload: {
        post: createPostCall.data.data,
      },
    });
  } catch (error) {
    console.log(error);
    action.payload.callbackError(error.response?.data?.message);
    yield put({
      type: CREATE_NEW_POST_FAILED,
      payload: {
        error: error.response?.data?.message,
      },
    });
  }
}

function* createComment(action) {
  try {
    yield put({
      type: POST_LOADING_ON,
    });
    console.log(action.payload.postId, "sadasd");
    let createPostCall = yield createCommentApi(
      action.payload.postId,
      action.payload.content
    );
    console.log(createPostCall.data.data);
    action.payload.callback("create new comment successful");
    yield put({
      type: CREATE_NEW_COMMENT_SUCCEED,
      payload: {
        comment: createPostCall.data.data,
        postId: action.payload.postId,
      },
    });
  } catch (error) {
    console.log(error);
    action.payload.callbackError(error.response?.data?.message);
    yield put({
      type: CREATE_NEW_COMMENT_FAILED,
      payload: {
        error: error.response?.data?.message,
      },
    });
  }
}

function* getListPosts(action) {
  try {
    let postState = yield select(getPostState);
    let page = postState.currentPage;
    yield put({
      type: POST_LOADING_ON,
    });
    let getListPostsCall = yield getListPostApi(page);
    yield put({
      type: POST_FETCH_SUCCEED,
      payload: {
        listPosts: getListPostsCall.data.data,
      },
    });
  } catch (error) {
    console.log(error);
    action.payload.callbackError(error.response?.data?.message);
    yield put({
      type: POST_FETCH_FAILED,
      payload: {
        error: error.response?.data?.message,
      },
    });
  }
}

function* getListPostsLoadMore(action) {
  try {
    let postState = yield select(getPostState);
    let page = postState.currentPage;
    let hasLoadMore = postState.hasLoadMore;
    let getListPostsCall;

    if (hasLoadMore) {
      page = page + 1;
      yield put({
        type: POST_LOADING_ON,
      });
      getListPostsCall = yield getListPostApi(page);
      if (getListPostsCall.data.data.length === 0) hasLoadMore = false;
      yield put({
        type: POST_FETCH_LOAD_MORE_SUCCEED,
        payload: {
          listPosts: getListPostsCall.data.data,
          page,
          hasLoadMore,
        },
      });
    }
  } catch (error) {
    console.log(error);
    action.payload.callbackError(error.response?.data?.message);
    yield put({
      type: POST_FETCH_LOAD_MORE_FAILED,
      payload: {
        error: error.response?.data?.message,
      },
    });
  }
}

function* getCommentOfPost(action) {}

const postSaga = [
  takeLatest(POST_FETCH, getListPosts),
  takeLatest(COMMENT_FETCH, getCommentOfPost),
  takeLatest(CREATE_NEW_POST_REQUEST, createPost),
  takeLatest(POST_FETCH_LOAD_MORE, getListPostsLoadMore),
  takeLatest(CREATE_NEW_COMMENT_REQUEST, createComment),
];

export default postSaga;
