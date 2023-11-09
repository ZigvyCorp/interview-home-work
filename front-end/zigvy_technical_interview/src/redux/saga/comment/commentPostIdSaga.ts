import axios from "axios";
import { put, call, all, takeLatest } from "redux-saga/effects";
import { CommentModel } from "../../../model/type";

import { postIdTypes } from "../../actions-types/postTypes";
import { baseUrl } from "../../../baseurl";
import {
  fetchCommentPostIdFailure,
  fetchCommentPostIdSuccess,
} from "../../actions/comment/commentPostIdAction";

const getCommentPostId = ({ postId }: { postId: number }) =>
  axios.get<CommentModel[]>(baseUrl + `/comments?postId=${postId}`);

function* fetchCommentPostIdSaga(action: any): any {
  try {
    const postId = action.payload;
    const response = yield call(getCommentPostId, postId);
    yield put(
      fetchCommentPostIdSuccess({
        comments: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchCommentPostIdFailure({
        errorComment: e.message,
      })
    );
  }
}

function* commentPostIdSaga() {
  yield all([
    takeLatest(postIdTypes.FETCH_POST_ID_REQUEST, fetchCommentPostIdSaga),
  ]);
}

export default commentPostIdSaga;
