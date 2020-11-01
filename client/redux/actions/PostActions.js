import { 
  GET_ALL_POSTS_REQUEST, 
  GET_ALL_POSTS_FAIL, 
  GET_ALL_POSTS_SUCCESS ,
  GET_POST_DETAIL_REQUEST,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_DETAIL_FAIL,
  ADD_NEW_POST_REQUEST,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAIL,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAIL
} from './ActionsType'

export const getAllPostRequest = (page) => ({
  type: GET_ALL_POSTS_REQUEST,
  page
})

export const getAllPostSuccess = (payload, total, page) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload,
  total,
  page
})

export const getAllPostFail = () => ({
  type: GET_ALL_POSTS_FAIL,
})

export const getPostDetailRequest = (_id) => ({
  type: GET_POST_DETAIL_REQUEST,
  _id
})

export const getPostDetailSuccess = (payload) => ({
  type: GET_POST_DETAIL_SUCCESS,
  payload
})

export const getPostDetailFail = () => ({
  type: GET_POST_DETAIL_FAIL,
})

export const addNewPostRequest = (data) => ({
  type: ADD_NEW_POST_REQUEST,
  data
})

export const addNewPostSuccess = (payload, owner) => ({
  type: ADD_NEW_POST_SUCCESS,
  payload,
  owner
})

export const addNewPostFail = () => ({
  type: ADD_NEW_POST_FAIL,
})

export const searchPostRequest = (title) => ({
  type: SEARCH_POST_REQUEST,
  title
})

export const searchPostSuccess = (payload) => ({
  type: SEARCH_POST_SUCCESS,
  payload
})

export const searchPostFail = () => ({
  type: SEARCH_POST_FAIL,
})

