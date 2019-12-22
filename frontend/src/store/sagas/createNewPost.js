import { put } from "redux-saga/effects";
import { get as _get } from 'lodash';

import axios from "../../axios";
import * as actions from "../actions/";

export function* createNewPost(action) {
  try {
    yield put(actions.createNewPostStart());
    const res = yield axios.post("/posts", action.postData);
    const posts = _get(res, "data.data.data", []);
    console.log(posts)
    yield put(actions.createNewPostSuccess(posts));
  } catch (error) {
    yield put(actions.createNewPostFail(error));
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