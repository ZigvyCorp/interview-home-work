import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api/post';

function* getUsers() {
    try {
      const result = yield call(api.getUserList);
      yield put(actions.getUsers(result.data)); 
    } catch (error) {
      console.error(error);
    }
  }

function* getUserListRequest() {
    yield takeEvery(actions.types.GET_USERS_REQUEST, getUsers);
}

const postSagas = [fork(getUserListRequest)];

export default postSagas;