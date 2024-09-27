import { call, put, takeLatest } from "redux-saga/effects";
import { getPost } from "../../api/PostAPI";
import { finished } from "../action/loadingAction";
import { useDispatch } from "react-redux";
import { POST_FETCH_REQUESTED } from "../../constant/redux/action";

function* postFetch(pageIndex: number) {
  return yield getPost(pageIndex);
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPost(action: any) {
  try {
    const posts = yield call(postFetch, action.pageIndex);
    yield put({ type: "POST_FETCH_SUCCEED", post: posts.data });
  } catch (e) {
    yield put({ type: "POST_FETCH_FAILED", message: "Fetch failed" });
  }
}

function* PostSaga() {
  yield takeLatest(POST_FETCH_REQUESTED, fetchPost);
}

export { PostSaga };
