import axios from "axios";
import { put, call, all, takeLatest } from "redux-saga/effects";
import { UserModel } from "../../../model/type";

import { baseUrl } from "../../../baseurl";
import {
  fetchUserIdFailure,
  fetchUserIdSuccess,
} from "../../actions/user/userIdAction";
import { userActionTypes } from "../../actions-types/userActionTypes";

const getUserId = ({ userId }: { userId: number }) =>
  axios.get<UserModel>(baseUrl + `/users/${userId}`);

function* fetchUserIdSaga(action: any): any {
  try {
    const userId = action.payload;
    const response = yield call(getUserId, userId);
    yield put(
      fetchUserIdSuccess({
        user: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchUserIdFailure({
        errorUserId: e.message,
      })
    );
  }
}

function* userIdSaga() {
  yield all([
    takeLatest(userActionTypes.FETCH_USER_ID_REQUEST, fetchUserIdSaga),
  ]);
}

export default userIdSaga;
