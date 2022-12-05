import { takeLeading, select, put, call } from 'redux-saga/effects';
import * as Actions from '../actionTypes';
import axios from 'axios';
const fakeTags = ["gov", "legal", "political", "breathtaking", "landscape", "vietnam", "consult", "it", "hala"]

export function* watcherPost() {
    yield takeLeading(Actions.GET_POST, workerGetPost);
    yield takeLeading(Actions.CREATE_POST, workerAddPost);
    yield takeLeading(Actions.MODIFY_POST, workerModifyPost);
    yield takeLeading(Actions.REMOVE_POST, workerRemovePost);
}


function* workerGetPost(action) {
    console.log('workerGetPost');
    try {
        const data = yield call(getPost)
        const allPost = data.map(item => ({
            id: item.id,
            owner: item.userId,
            title: item.title,
            content: item.body,
            created_at: (new Date()).getTime() - Math.floor(Math.random() * 31536000000),
            tags: [...Array(5)].map(i => fakeTags[Math.floor(Math.random() * fakeTags.length)])
        }))
        // console.log(allPost)
        yield put({ type: Actions.UPDATE_POST, payload: allPost });
    } catch (error) {
        console.log(error);
    }
}
async function getPost() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}


// Them, Sua, Xoa Post

function* workerAddPost(action) {
    console.log('workerAddPost');
    try {
        const id = Math.floor(Math.random() * 10000000)+''
        const created_at = (new Date()).getTime()
        const newPost = {
            id, created_at, ...action.payload
        }
        yield put({ type: Actions.ADD_POST, payload: [newPost] });
    } catch (error) {
        console.log(error);
    }
}

function* workerModifyPost(action) {
    console.log('workerModifyPost');
    try {
        let postList = yield select(state => state.post.postList);

        postList = postList.map(f => {
            if (f.id === action.payload.id) return action.payload
            return f
        })

        yield put({ type: Actions.UPDATE_POST, payload: postList })
    } catch (error) {
        console.log(error);
    }
}

function* workerRemovePost(action) {
    console.log('workerRemovePost');
    try {
        let postList = yield select(state => state.post.postList);
        postList = postList.filter(f => f.id !== action.payload.id)
        const newPostList = {}
        Object.assign(newPostList, postList);
        yield put({ type: Actions.UPDATE_POST, payload: newPostList })

    } catch (error) {
        console.log(error);
    }
}