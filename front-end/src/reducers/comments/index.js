import { ADD_COMMENT, SET_COMMENTS } from '../../constants/actionTypes'

const initialState = []

const commentsReducer = (state = initialState, action) => {
	switch(action.type) {
    case ADD_COMMENT:
      return [ ...state, action.comment ]
    case SET_COMMENTS:
      return action.comments
		default:
			return state
	}
}

export { commentsReducer }