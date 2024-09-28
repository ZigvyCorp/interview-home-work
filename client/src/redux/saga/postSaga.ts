import { call, put, takeLatest } from "redux-saga/effects";
import { getPost } from "../../api/PostAPI";
import {
  FINISHED,
  PAGE_CHANGED,
  PAGINATION_UPDATED,
  POST_FETCH_FAILED,
  POST_FETCH_REQUESTED,
  POST_FETCH_SUCCEED,
} from "../../constant/redux/action";

function* postFetch(pageIndex: number, keywords: string) {
  return yield getPost(pageIndex, keywords);
}

function* fetchPost(action: any) {
  try {
    const posts = yield call(postFetch, action.pageIndex, action.keywords);
    yield put({ type: POST_FETCH_SUCCEED, post: posts.data.data });
    yield put({ type: PAGINATION_UPDATED, pageInfo: posts.data.pageInfo });
    yield put({ type: FINISHED });
  } catch (e) {
    yield put({ type: POST_FETCH_FAILED, message: "Fetch failed" });
  }
}

function* PostSaga() {
  yield takeLatest(POST_FETCH_REQUESTED, fetchPost);
  yield takeLatest(PAGE_CHANGED, fetchPost);
}

export { PostSaga };
