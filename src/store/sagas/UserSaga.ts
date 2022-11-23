import { call, put, takeLatest, all } from "redux-saga/effects";
import { UserActionsType } from "../actionTypes";
import { LoadingActions, UserActions } from "../actions";
import { Users } from "../../API/User/Interface";
import { fetchUserService } from "../../API/User/ApiService";

function* fetchPosts() {
  try {
    yield put(LoadingActions.start());
    const result: Users.FetchUsersResponse = yield call(fetchUserService);
    yield put(UserActions.setUsers(result));
    yield put(LoadingActions.stop());
  } catch (error) {
    yield put(LoadingActions.stop());
    yield put(UserActions.setUsers({ items: [] }));
  }
}

export default function* () {
  yield all([takeLatest(UserActionsType.fetchUsers, fetchPosts)]);
}
