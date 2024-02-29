import { call, put, takeEvery } from "redux-saga/effects";
import { setPosts } from "../reducers/postsSlice";
import { apiGetAllPosts } from "../../apis/postsApis";

// saga fetch data get all posts from api
function* getAllPostsSaga(action) {
  const { page, pageSize } = action.payload;
  try {
    const posts = yield call(apiGetAllPosts, {
      page: page,
      pageSize: pageSize,
    });

    yield put(setPosts(posts.data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export function* watchGetAllPosts() {
  yield takeEvery("FETCH_POSTS_REQUEST", getAllPostsSaga);
}
