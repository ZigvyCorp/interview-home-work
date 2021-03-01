import { GET_POST_SUCCESS, GET_POSTS_FAIL, GET_POSTS_SUCCESS, SEND_REQUEST } from './types'

const initialState = {
  posts: null,
  post: null,
  loading: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {...state, loading: true, posts: null, post: null}
    case GET_POSTS_SUCCESS:
      return {...state, loading: false, posts: action.payload}
    case GET_POST_SUCCESS:
      return {...state, loading: false, post: action.payload}
    case GET_POSTS_FAIL:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}

export default reducer
