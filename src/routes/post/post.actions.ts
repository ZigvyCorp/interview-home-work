import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_FETCH,
  ACTION_FETCHING
} from "./post.constant";
import { call, takeEvery, put, delay } from "redux-saga/effects";
import { api } from "./post.services";

export const actionFetching = (payload: string) => ({
  type: ACTION_FETCHING,
  payload
});

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = (payload: string) => ({
  type: ACTIION_FETCH_FAIL,
  payload
});

function* actionFetch(action: { type: string; payload: any }) {
  const { id } = action.payload;
  try {
    yield put(actionFetching(id));
    const { data } = yield call(api, id);
    yield put(actionFetched(data));
  } catch (error) {
    yield put(actionFetchFail(id));
  }
}

function* watchFetch() {
  yield takeEvery(ACTION_FETCH, actionFetch);
}

export default [watchFetch];
