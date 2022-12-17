import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as ACTION from '../constants/constants';
import Moment from 'moment';
function* workerGetComment(action) {
    try {
        const data = yield call(getComment)
        const allComment = data.map(item => ({
            id: item.id,
            owner: Math.floor(Math.random() * 10) + 1,
            post: item.postId,
            content: item.body,
            created_at: Moment((new Date()).getTime() - Math.floor(Math.random() * 31536000000)).format("ll")
        }))
        yield put({ type: ACTION.UPDATE_COMMENT, payload: allComment });
    } catch (error) {
        console.log(error);
    }
}
async function getComment() {
    try {
        const response  = await axios.get('https://jsonplaceholder.typicode.com/comments');
        return response.data;
    } catch (error) {
        return [];
    }
}

export function* actionComment() {
    yield takeLatest(ACTION.GET_COMMENT, workerGetComment);
}

