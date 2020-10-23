import * as Types from './../constants/user';

export const addUser = user =>{
	return{
		type: Types.ADD_USER,
		payload:{
			user
		}
	}
}

export const addUserSuccess = data =>{
	return{
		type: Types.ADD_USER_SUCCESS,
		payload:{
			data
		}
	}
}

export const loginUser = user =>{
	return{
		type: Types.LOGIN_USER,
		payload:{
			user
		}
	}
}

export const loginUserSuccess = data =>{
	return{
		type: Types.LOGIN_USER_SUCCESS,
		payload:{
			data
		}
	}
}

export const fetchUser = () =>{
	return{
		type: Types.FETCH_USER
	}
}

export const fetchUserSuccess = data =>{
	return{
		type: Types.FETCH_USER_SUCCESS,
		payload:{
			data
		}
	}
}