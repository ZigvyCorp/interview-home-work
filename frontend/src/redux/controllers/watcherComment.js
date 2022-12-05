import { takeLeading, select, put, call } from 'redux-saga/effects';
import * as Actions from '../actionTypes';
import axios from 'axios';

export function* watcherComment() {
    yield takeLeading(Actions.GET_COMMENT, workerGetComment);
    yield takeLeading(Actions.CREATE_COMMENT, workerAddComment);
    yield takeLeading(Actions.MODIFY_COMMENT, workerModifyComment);
    yield takeLeading(Actions.REMOVE_COMMENT, workerRemoveComment);
}

function* workerGetComment(action) {
    console.log('workerGetComment');
    try {
        const data = yield call(getComment)
        const allComment = data.map(item => ({
            id: item.id,
            owner: Math.floor(Math.random() * 10)+1,
            post: item.postId,
            content: item.body,
            created_at: (new Date()).getTime() - Math.floor(Math.random() * 31536000000)
        }))
        // console.log(data)
        // console.log(allComment)
        yield put({ type: Actions.UPDATE_COMMENT, payload: allComment });
    } catch (error) {
        console.log(error);
    }
}
async function getComment() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Them, Sua, Xoa Comment
function* workerAddComment(action) {
    console.log('workerAddComment');
    try {
        const id = Math.floor(Math.random() * 10000000) + ''
        const created_at = (new Date()).getTime()
        const newComment = {
            id, created_at, ...action.payload
        }
        yield put({ type: Actions.ADD_COMMENT, payload: [newComment] });
    } catch (error) {
        console.log(error);
    }
}

function* workerModifyComment(action) {
    console.log('workerModifyComment');
    try {
        let comments = yield select(state => state.comment.allComment);

        comments = comments.map(f => {
            if (f.id === action.payload.id) return action.payload
            return f
        })

        yield put({ type: Actions.UPDATE_COMMENT, payload: comments })
    } catch (error) {
        console.log(error);
    }
}

function* workerRemoveComment(action) {
    console.log('workerRemoveComment');
    try {
        let comments = yield select(state => state.comment.allComment);
        comments = comments.filter(f => f.id !== action.payload.id)
        const newComments = {}
        Object.assign(newComments, comments);
        yield put({ type: Actions.UPDATE_COMMENT, payload: newComments })

    } catch (error) {
        console.log(error);
    }
}