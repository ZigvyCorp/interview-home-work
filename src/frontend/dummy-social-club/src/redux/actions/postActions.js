import * as types from './actionTypes';
import axios from 'axios';

export function loadAllPosts(posts) {
  return { type: types.LOAD_ALL_POSTS, posts };
}

export function loadPosts() {
  return function (dispatch) {
    const endpoint = 'http://localhost:3000/api/posts';
    axios.get(endpoint).then(posts => {
      dispatch(loadAllPosts(posts));
    }).catch(err => {
      throw err;
    });
  }
}