import axios from "axios";
import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,GET_COMMENTS } from "../constants/index";
import { call, put, takeEvery  } from "redux-saga/effects";

function* getComments(action) {
  try {
    const { id } = action.payload;
    const response = yield call(axios.get, `${process.env.REACT_APP_API}/comment/comments/${id}`)

    yield put({ type: FETCH_COMMENTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_COMMENTS_FAILURE, payload: error });
  }
}

function* watchGetComments() {
  yield takeEvery(GET_COMMENTS, getComments);
}

 function* getCommentsSaga() {
  yield watchGetComments();
}
export {
  getCommentsSaga
}

