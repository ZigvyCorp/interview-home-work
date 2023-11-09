import { put, takeEvery } from "redux-saga/effects";
import {
  PAGINATION,
  POST_DETAIL,
  POST_LIST,
  SET_PAGINATION,
  SET_POST_DETAIL,
  SET_POST_LIST,
} from "./constant";
import axios from "axios";

const urlBE = import.meta.env.BASE_URL_BACK_END || "http://localhost:3000";

type Pagination = {
  page: number;
  perPage: number;
  key: string;
};
type Params = {
  data: Pagination;
};

function* getPosts(payload: Params): Generator<unknown> {
  const response: any = yield axios.get(
    `${urlBE}/posts?key=${payload.data.key}&page=${payload.data.page}&perPage=${payload.data.perPage}`
  );
  yield put({ type: SET_POST_LIST, data: response.data.docs });
  yield put({ type: SET_PAGINATION, data: response.data.docs });
}

function* getDetailPost(payload: { data: { id: string } }): Generator<unknown> {
  const response: any = yield axios.get(`${urlBE}/posts/${payload.data.id}`);

  yield put({ type: SET_POST_DETAIL, data: response.data });
}

function* postSaga() {
  yield takeEvery(POST_LIST as any, getPosts);
  yield takeEvery(POST_DETAIL as any, getDetailPost);
  yield takeEvery(PAGINATION as any, getPosts);
}

export default postSaga;
