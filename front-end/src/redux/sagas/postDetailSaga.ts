import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../config/axios";
import { BaseHttpResponse } from "../../interfaces/response/BaseHttpResponse";
import { PostResponse } from "../../interfaces/response/PostResponse";
import { GET_POST_DETAIL, GET_POST_DETAIL_SAGA } from "../actions/postDetailAction";
import { PostDetailPayload } from "../../interfaces/ReduxPayload";

const getPostHandler = function*(id: number): Generator<any, any, BaseHttpResponse<PostResponse>> {
  const { data } = yield API.get(`/post/${id}`);
  return data;
};

const fetchData = function*async({ payload }: { payload: PostDetailPayload }): Generator<any, any, PostResponse> {
  try {
    const response = yield call(getPostHandler, payload.id);
    yield put({ type: GET_POST_DETAIL, payload: response } );
  } catch (err) {
    console.log(err);
  }
};

export const getPost = function*() {
  yield takeLatest<any>(GET_POST_DETAIL_SAGA, fetchData);
};