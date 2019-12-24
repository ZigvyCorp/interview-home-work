import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_FETCH,
  ACTION_FETCHING
} from "./comments.constant";
import { call, takeEvery, put, delay } from "redux-saga/effects";
import { api } from "./comments.services";

export const actionFetching = (payload: number) => ({
  type: ACTION_FETCHING,
  payload
});

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = (payload: number) => ({
  type: ACTIION_FETCH_FAIL,
  payload
});

function* actionFetch(action: {
  type: string;
  payload: {
    id: number;
  };
}) {
  const { id } = action.payload;
  try {
    yield put(actionFetching(id));
    yield delay(500);
    const { data } = yield call(api, id);
    yield put(actionFetched({ data, id }));
  } catch (error) {
    yield put(actionFetchFail(id));
  }
}

function* watchFetch() {
  yield takeEvery(ACTION_FETCH, actionFetch);
}

export default [watchFetch];
