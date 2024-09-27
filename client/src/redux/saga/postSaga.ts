import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getPost } from "../../api/PostAPI";
import { finished } from "../action/loadingAction";
import { useDispatch } from "react-redux";

const postFetch = (pageIndex: number) => {
  const dispatch = useDispatch();
  return getPost(pageIndex)
    .then((res) => res.data as Post[])
    .finally(() => dispatch(finished()));
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPost(action: any) {
  try {
    const posts: Post[] = yield call(postFetch, action.payload.pageIndex);
    yield put({ type: "USER_FETCH_SUCCEEDED", post: posts });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: "Fetch failed" });
  }
}

function* PostSaga() {
  yield takeLatest("POST_FETCH_REQUESTED", fetchPost);
}

export { PostSaga };
