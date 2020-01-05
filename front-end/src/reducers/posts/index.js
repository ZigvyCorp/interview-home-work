import { ADD_POST, SET_POSTS } from '../../constants/actionTypes'

const initialState = []

const postsReducer = (state = initialState, action) => {
	switch(action.type) {
    case ADD_POST:
      return [ ...state, action.post ]
    case SET_POSTS:
      return action.posts
		default:
			return state
	}
}

export { postsReducer }