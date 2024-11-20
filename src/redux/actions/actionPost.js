import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import * as ACTION from '../constants/constants';
import Moment from 'moment';
const fakeTags = ["gov", "legal", "political", "breathtaking", "landscape", "vietnam", "consult", "it", "hala"]

function* workerGetPost(action) {
    try {
        yield put({ type: ACTION.SET_LOADING, payload: true });
  
        const data = yield call(getPost);
        const allPost = data.map(item => ({
            id: item.id,
            owner: item.userId,
            title: item.title,
            content: item.body,
            created_at: Moment((new Date()).getTime() - Math.floor(Math.random() * 31536000000)).format("ll"),
            tags: [...Array(10)].map(tag => fakeTags[Math.floor(Math.random() * fakeTags.length)])
        }))

        yield put({ type: ACTION.UPDATE_POST, payload: allPost });
        yield put({ type: ACTION.SET_LOADING, payload: false });
      
        // yield put({ type: 'SET_HIT', payload: allPost });

    } catch (error) {
        console.log(error);

    }
}
async function getPost(id='') {
    try {
        const response  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    } catch (error) {
        return [];
    }

}



export function* actionGetPost() {
    yield takeLatest(ACTION.GET_POST, workerGetPost);
}

// const getPostItem = async (postId) => {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`
//     );
  
//     return response.data;
//   };

  

//   export {  getPostItem};
