import { call, put, takeEvery } from 'redux-saga/effects';
import { getNextPost, getPost } from '../slice/postSlice';
import { IPost } from '../../type/post';

const START_INDEX = 0;
const LIMIT_POST = 5;
const fetchPosts = async (page: number) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts?_start=${START_INDEX}&_limit=${LIMIT_POST}&_page=${page}`)
        .then(res => res.json())
        .catch((error) => console.error(error))
    return response;
}

// Fetch Post
function* fetchPostWorker() {
    const res: IPost[] = yield call(fetchPosts, 1);
    yield put(getPost(res));
}

export function* fetchPostWatcher() {
    yield takeEvery('FETCH_POST', fetchPostWorker);
}

// Fetch Next Post
function* fetchNextPostWorker(action: any) {
    const res: IPost[] = yield call(fetchPosts, action?.payload as number);
    yield put(getNextPost(res));
}

export function* fetchNextPostWatcher() {
    yield takeEvery('FETCH_NEXT_POST', fetchNextPostWorker);
}

// Search Post
const searchPosts = async (keyword: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts?title=${encodeURIComponent(keyword)}`)
        .then(res => res.json())
        .catch((error) => console.error(error))
    return response;
}
let isFirstRequest = true;
function* searchPostWorker(action: any) {
    if (isFirstRequest) {
        isFirstRequest = false;
    }
    else {
        var res: IPost[] = [];
        const keyword: string = action?.payload;
        if (keyword.length) {
            res = yield call(searchPosts, keyword.toLowerCase());
        } else {
            res = yield call(fetchPosts, 1);
        }
        yield put(getPost(res));
    }

}

export function* searchPostWatcher() {
    yield takeEvery('SEARCH_POST', searchPostWorker);
}

