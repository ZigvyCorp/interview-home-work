import { call, put, takeLatest } from "redux-saga/effects";
import { getPost } from "../../api/PostAPI";
import { PAGINATION_UPDATED, POST_FETCH_REQUESTED } from "../../constant/redux/action";

function* postFetch(pageIndex: number) {
  return yield getPost(pageIndex);
}

function* fetchPost(action: any) {
  try {
    const posts = yield call(postFetch, action.pageIndex);
    yield put({ type: "POST_FETCH_SUCCEED", post: posts.data.data });
    yield put({ type: PAGINATION_UPDATED, pageInfo: posts.data.pageInfo })
  } catch (e) {
    yield put({ type: "POST_FETCH_FAILED", message: "Fetch failed" });
  }
}

function* PostSaga() {
  yield takeLatest(POST_FETCH_REQUESTED, fetchPost);
}

export { PostSaga };
