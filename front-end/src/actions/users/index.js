import { ADD_USER, FETCH_USERS, SET_USERS } from '../../constants/actionTypes'

export const doAddUser = (user) => ({
	type: ADD_USER,
	user,
})

export const doFetchUsers = () => ({
	type: FETCH_USERS,	
})

export const doSetUsers = (users) => ({
	type: SET_USERS,
	users,
})

