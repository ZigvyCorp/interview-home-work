import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_FETCH,
  ACTION_AUTH
} from "./auth.constant";
import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "./auth.services";

export const actionAuth = (payload: boolean) => ({
  type: ACTION_AUTH,
  payload
});

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = () => ({
  type: ACTIION_FETCH_FAIL
});

function* actionFetch() {
  try {
    const access_token = localStorage.getItem("access_token") || "";
    const { data } = yield call(api, access_token);
    yield put(actionFetched(data));
  } catch (error) {
    yield put(actionFetchFail());
  }
}

function* watchFetch() {
  yield takeEvery(ACTION_FETCH, actionFetch);
}

export default [watchFetch];
