import { call, put } from 'redux-saga/effects'
import { setAuthor, setComments, setPosts } from '../../store/actions/posts';
import { requestGetComments, requestGetPosts, requestGetAuthor } from '../requests/posts'

export function* handlerGetPosts(action) {
    try {
        const response = yield call(requestGetPosts)
        const data = response.data
        yield put(setPosts(data))
    }
    catch (err) {
        console.log(err);
    }
}


export function* handlerGetComments(action) {
    try {
        const response = yield call(requestGetComments, action.postId)
        const data = response.data
        yield put(setComments(action.postId, data))
    }
    catch (err) {
        console.log(err);
    }
}

export function* handlerGetAuthor(action) {
    try {
        const response = yield call(requestGetAuthor, action.userId)
        const data = response.data
        const user = {id: action.userId, username: data.username}
        yield put(setAuthor(action.postId, user))
    }
    catch (err) {
        console.log(err);
    }
}

