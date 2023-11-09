import axios from "axios";
import { put, call, all, takeLatest } from "redux-saga/effects";
import { Post } from "../../../utils/type";
import {
  fetchPostIdSuccess,
  fetchPostIdFailure,
} from "../../actions/postIdAction";
import { postIdTypes, postTypes } from "../../actions-types/postTypes";

const baseUrl = "https://jsonplaceholder.typicode.com";
const getPostId = ({ postId }: { postId: string }) =>
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
