import callAPI from '../../utils/api'
// import * as Constants from "../../constants";

//constants
const Types = {
  CREAT_NEW_POST: 'CREATE_NEW_POST',
}

//actions
export const createNewPost = (title, description, content) => {
  return dispatch => {
    return callAPI(`posts`, 'POST', { title, description, content }, 'Bearer')
      .then(res => {
        if (res.data) {
          dispatch(actCreatePost(res.data))
        }
      })
      .catch(error => console.log('Fetch Error ' + error))
  }
}

export const actCreatePost = post => {
  return {
    type: Types.CREAT_NEW_POST,
    post,
  }
}
//reducers
const initialState = {
  newPost: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.CREAT_NEW_POST:
      state.newPost = action.post
      return { ...state }
    default:
      return { ...state }
  }
}
