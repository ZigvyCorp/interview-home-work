import { call, put, takeLatest } from "redux-saga/effects";
import { PostActionPayload } from "../../interfaces/ReduxPayload";
import { BaseHttpResponse } from "../../interfaces/response/BaseHttpResponse";
import { PaginationResponse } from "../../interfaces/response/PaginationResponse";
import { PostResponse } from "../../interfaces/response/PostResponse";
import { executeGetWithPagination } from "../../utils/APIUtil";
import { GET_POSTS, GET_POSTS_SAGA } from "../actions/postAction";

const getAllPosts = function*(pagination: PostActionPayload): Generator<any, any, BaseHttpResponse<PaginationResponse<PostResponse>>> {
  const { data } = yield executeGetWithPagination('/post', pagination);
  return data;
};

const fetchData = function*async({ pagination }: { pagination: PostActionPayload }): Generator<any, any, PaginationResponse<PostResponse>> {
  try {
    const { rows, count } = yield call(getAllPosts, pagination);
    yield put({ type: GET_POSTS, payload: { rows, count }} );
  } catch (err) {
    console.log(err);
  }
};

export const getPosts = function*() {
  yield takeLatest<any>(GET_POSTS_SAGA, fetchData);
};