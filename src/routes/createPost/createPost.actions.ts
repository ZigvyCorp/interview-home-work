import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_FETCH,
  ACTION_ALERT
} from "./createPost.constant";
import { call, takeEvery, put, delay } from "redux-saga/effects";
import { api } from "./createPost.services";
import { getAccessToken } from "src/shared/utils";

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = () => ({
  type: ACTIION_FETCH_FAIL
});

export const actionAlert = (payload: { type: string; content: string }) => ({
  type: ACTION_ALERT,
  payload
});

function* actionFetch(action: { type: string; payload: any }) {
  try {
    yield delay(500);
    const { data } = yield call(api, action.payload, getAccessToken());
    yield put(actionFetched(data));
    window.location.href = `/update-post/${data.id}`;
  } catch (error) {
    yield put(actionFetchFail());
  }
}

function* watchFetch() {
  yield takeEvery(ACTION_FETCH, actionFetch);
}

export default [watchFetch];
