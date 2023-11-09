import axios from "axios";
import { put, call, all, takeLatest } from "redux-saga/effects";
import { Post } from "../../../model/type";
import {
  fetchPostIdSuccess,
  fetchPostIdFailure,
} from "../../actions/post/postIdAction";
import { postIdTypes } from "../../actions-types/postTypes";
import { baseUrl } from "../../../baseurl";

const getPostId = ({ postId }: { postId: number }) =>
  axios.get<Post>(baseUrl + `/posts/${postId}`);

function* fetchPostIdSaga(action: any): any {
  try {
    const postId = action.payload;
    const response = yield call(getPostId, postId);
    yield put(
      fetchPostIdSuccess({
        post: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostIdFailure({
        error: e.message,
      })
    );
  }
}

function* postIdSaga() {
  yield all([takeLatest(postIdTypes.FETCH_POST_ID_REQUEST, fetchPostIdSaga)]);
}

export default postIdSaga;
