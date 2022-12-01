import { call, put, select, takeLatest } from "redux-saga/effects";

import * as Types from "../types/postType";
import postApi from "../../api/postApi";

function* getListPosts(action) {
  try {
    const result = yield call(postApi.getListPost);
    yield put({ type: Types.POST_FETCH_SUCCESS, payload: result });
  } catch (error) {
    console.log(error);
    yield put({
      type: Types.POST_FETCH_FAILED,
      payload: {
        error: error.message,
      },
    });
  }
}

function* postSaga(){
    yield takeLatest(Types.POST_FETCH,getListPosts)
}

export default postSaga;
