import { takeLeading, select, put, call } from 'redux-saga/effects';
import * as Actions from '../actionTypes';
import axios from 'axios';

export function* watcherUser() {
    yield takeLeading(Actions.GET_USER, workerGetUser);
    yield takeLeading(Actions.CREATE_USER, workerAddUser);
    yield takeLeading(Actions.MODIFY_USER, workerModifyUser);
    yield takeLeading(Actions.REMOVE_USER, workerRemoveUser);
}

function* workerGetUser(action) {
    console.log('workerGetUser');
    try {
        const data = yield call(getUser)
        const allUser = data.map(item => ({
            ...item,
            created_at: (new Date()).getTime() - Math.floor(Math.random() * 31536000000)
        }))
        // console.log(allUser)
        yield put({ type: Actions.UPDATE_USER, payload: allUser });
    } catch (error) {
        console.log(error);
    }
}
async function getUser() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Them, Sua, Xoa User
function* workerAddUser(action) {
    console.log('workerAddUser');
    try {
        const id = Math.floor(Math.random() * 10000000) + ''
        const created_at = (new Date()).getTime()
        const newUser = {
            id, created_at, ...action.payload
        }
        yield put({ type: Actions.ADD_USER, payload: [newUser] });
    } catch (error) {
        console.log(error);
    }
}

function* workerModifyUser(action) {
    console.log('workerModifyUser');
    try {
        let userList = yield select(state => state.user.userList);

        userList = userList.map(f => {
            if (f.id === action.payload.id) return action.payload
            return f
        })

        yield put({ type: Actions.UPDATE_USER, payload: userList })
    } catch (error) {
        console.log(error);
    }
}

function* workerRemoveUser(action) {
    console.log('workerRemoveUser');
    try {
        let userList = yield select(state => state.user.userList);
        userList = userList.filter(f => f.id !== action.payload.id)
        const newUserList = {}
        Object.assign(newUserList, userList);
        yield put({ type: Actions.UPDATE_USER, payload: newUserList })

    } catch (error) {
        console.log(error);
    }
}