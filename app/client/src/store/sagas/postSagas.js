import { call, put, takeLatest } from "redux-saga/effects";
import { getPosts } from "../../services/postService";
import { ActionTypes } from "../actions/postActions";

function* fetchPosts(action) {
  const {
    payload: { pageSize, pageIndex, search },
  } = action;
  try {
    const data = yield call(getPosts, { page_size: pageSize, page: pageIndex, search });
    if (data.status) {
      yield put({
        type: ActionTypes.FETCH_POSTS_SUCCESS,
        payload: {
          list: data.data.list || [],
          count: data.data.count || [],
        },
      });
    } else {
      yield put({ type: ActionTypes.FETCH_POSTS_FAILURE, payload: "Failed!" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: ActionTypes.FETCH_POSTS_FAILURE, payload: error });
  }
}

function* watchFetchPosts() {
  yield takeLatest(ActionTypes.FETCH_POSTS_REQUEST, fetchPosts);
}

export default function* postsSaga() {
  yield watchFetchPosts();
}
