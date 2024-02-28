import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../api";
import {
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILED,
  GET_COMMENT_REQUEST,
} from "../actions/comment";

function* handleGetCommentByPostId(params: number): Generator<any, void, any> {
  try {
    const res = yield api.getCommentByPostId(params);

    yield put({ type: GET_COMMENT_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: GET_COMMENT_FAILED, error: "Failed to get all posts" });
  }
}

export function* watchGetCommentByPostId(
  payload: any
): Generator<any, void, any> {
  yield call(handleGetCommentByPostId, payload.payload);
}
