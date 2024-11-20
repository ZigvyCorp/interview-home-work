import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as ACTION from '../constants/constants';

function* workerGetUser(action) {
    try {
        const data = yield call(getUser)

        yield put({ type: ACTION.UPDATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
}
async function getUser() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export function* actionUser() {
    yield takeLatest(ACTION.GET_USER, workerGetUser);
}
