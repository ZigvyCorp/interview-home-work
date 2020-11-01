import { call, put } from "redux-saga/effects";
import callApi from '../../util/apiCaller';
import { getAllPostSuccess, getAllPostFail ,
   getPostDetailSuccess, getPostDetailFail ,
   addNewPostSuccess, addNewPostFail,
   searchPostSuccess, searchPostFail
  } from '../actions/PostActions'
export function* getAllPostRequest(action) {
  const { page } = action
  const res = yield call(callApi, `posts?page=${page}`)
  if(res.success)
  {
    yield put(getAllPostSuccess(res.data, res.total, page))
  } else {
    yield put(getAllPostFail(res.data))
  }
}

export function* getPostDetailRequest(action) {
  const { _id } = action
  const res = yield call(callApi, `posts/${_id}`)
  if(res.success)
  {
    yield put(getPostDetailSuccess(res.data))
  } else {
    yield put(getPostDetailFail(res.data))
  }
}

export function* addNewPostRequest(action) {
  const { data } = action
  const post = {
        owner: data.owner._id,
        title: data.title,
        content: data.content,
  }
  const res = yield call(callApi, `post`, 'post', {post: post})
  if(res.success)
  {
    yield put(addNewPostSuccess(res.data, data.owner))
  } else {
    yield put(addNewPostFail(res.data))
  }
}

export function* searchPostRequest(action) {
    const { title } = action
    if(title && title.length > 0){
      const res = yield call(callApi, `search?title=${title}`)
      if(res.success)
      {
        yield put(searchPostSuccess(res.data))
      } else {
        yield put(searchPostFail(res.data))
      }
    }
}