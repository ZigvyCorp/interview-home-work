import { call, put, takeEvery } from "redux-saga/effects";
import { getPostTitle } from "../../apis/postsApis";
import { postsByTitle } from "../reducers/searchPostsSlice";

//saga fetch posts by title when searching
function* searchPostsSaga(action) {
  const { title } = action.payload;
  try {
    const posts = yield call(getPostTitle, {
      title: title,
    });

    yield put(postsByTitle({ posts: posts.data, title: title }));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export function* watchSearchPostsTitle() {
  yield takeEvery("SEARCH_POSTS_REQUEST", searchPostsSaga);
}
