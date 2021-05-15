import { takeLatest, call, put } from 'redux-saga/effects';
import * as userActions from '../actions/users';
import * as userAPI from '../../api/userAPI';

function* fetchUsersSaga(action){
    const users = yield call(userAPI.fetchUsers);
    yield put(userActions.getUsers.getUsersSuccess(users.data));
}


function* userSaga() {
    yield takeLatest(userActions.getUsers.getUsersRequest,fetchUsersSaga);
}

export default userSaga;