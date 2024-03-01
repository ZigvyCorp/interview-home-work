import { call, put } from "redux-saga/effects";
import {
  LOAD_COMMENTS_COMPLETE,
  LOAD_COMMENTS_FAILED,
  LOAD_POSTS_COMPLETE,
  LOAD_POSTS_FAILED,
} from "../actions/homeActions";
import ApiService from "../../services/apiService";

export function* loadPosts() {
  try {
    const { posts } = yield call(ApiService.getPosts, null);
    yield put({ type: LOAD_POSTS_COMPLETE, payload: posts });
  } catch (e) {
    yield put({ type: LOAD_POSTS_FAILED, payload: e });
  }
}

export function* loadComments(action) {
  try {
    const { comments } = yield call(ApiService.getPostComments, action.payload);
    yield put({ type: LOAD_COMMENTS_COMPLETE, payload: comments });
  } catch (e) {
    yield put({ type: LOAD_COMMENTS_FAILED, payload: e });
  }
}
