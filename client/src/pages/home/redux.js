import callAPI from '../../utils/api'
// import * as Constants from "../../constants";

//constants
const Types = {
  GET_ALL_POSTS: 'GET_ALL_POSTS',
}

//actions
export const reqGetAllPosts = () => {
  return dispatch => {
    return callAPI(`posts`, 'GET', null, 'Bearer')
      .then(res => {
        if (res.data) {
          console.log('call api success', res.data)

          dispatch(actGetAllPost(res.data))
        }
      })
      .catch(error => console.log('Fetch Error ' + error))
  }
}

export const actGetAllPost = posts => {
  return {
    type: Types.GET_ALL_POSTS,
    posts,
  }
}
//reducers
const initialState = {
  allPosts: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_POSTS:
      state.allPosts = action.posts
      return { ...state }
    default:
      return { ...state }
  }
}
