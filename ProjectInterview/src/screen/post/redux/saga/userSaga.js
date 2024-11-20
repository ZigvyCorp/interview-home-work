import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as api from '../../../../data/callApi';
import * as actions from '../actions/postAction';

function* getUsers() {
    try {
        const result = yield call(api.getUserList);
        yield put(actions.getUsersReponse(result)); 
    } catch (error) {
        console.error(error);
    }
  }

function* getUserListRequest() {
    yield takeEvery(actions.types.USERS_REQUEST, getUsers);
}

const postSagas = [fork(getUserListRequest)];

export default postSagas;