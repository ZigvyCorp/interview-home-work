import { put } from "redux-saga/effects";
import { get as _get } from 'lodash';

import axios from "../../axios";
import * as actions from "../actions/";

export function* initFetchPosts(action) {
  const queryParams =`?page=1&limit=${action.limit}`;
  try {
    const res = yield axios.get("/posts" + queryParams);
    const posts = _get(res, "data.data.data", []);
    yield put(actions.initFetchPostsSuccess(posts));
  } catch (error) {
    yield put(actions.fetchPostsFail(error));
  }
}

export function* fetchPosts(action) {
  console.log(action);
  const queryParams =`?page=${action.page}&limit=${action.limit}`;
  try {
    yield put(actions.fetchPostsStart(action.limit));
    const res = yield axios.get("/posts" + queryParams);
    const posts = _get(res, "data.data.data", []);
    yield put(actions.fetchPostsSuccess(posts));
  } catch (error) {
    yield put(actions.fetchPostsFail(error));
  }
}