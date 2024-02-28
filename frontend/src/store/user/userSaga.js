import { put, call, takeEvery } from 'redux-saga/effects';
import { userActions } from './userSlice';
import userApi from '../../apis/userApi';

function* fetchUserList() {
    try {
        const response = yield call(userApi.getUsers);
        yield put(userActions.fetchUserListSuccess(response));
    } catch (err) {
        console.log("Fetch user list failed", err);
        yield put(userActions.fetchUserListFailed());
    }
}

function* userSaga() {
    yield takeEvery(userActions.fetchUserList.type, fetchUserList);
}

export default userSaga;