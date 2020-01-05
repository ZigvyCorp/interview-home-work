import { ADD_USER, SET_USERS } from '../../constants/actionTypes'

const initialState = []

const usersReducer = (state = initialState, action) => {
	switch(action.type) {
    case ADD_USER:
      return [ ...state, action.user]
    case SET_USERS:
      return action.users
		default:
			return state
	}
}

export { usersReducer }