import * as Types from './../constants/user';
let initialState ={
	mess:'',
	messLogin:'',
	user:null
}

const user = (state=initialState,action) =>{
	switch(action.type){
		// add user
		case Types.ADD_USER:
			return{...state};
		case Types.ADD_USER_SUCCESS:
			let {mess} = action.payload.data;
			return{...state,mess};
		// login user
		case Types.LOGIN_USER:
			return{...state};
		case Types.LOGIN_USER_SUCCESS:
			let messLogin =  action.payload.data.mess;
			if(messLogin === state.messLogin){
				let x = messLogin + ' ';
				return{...state,messLogin:x};
			}else if(messLogin !== state.messLogin){
				return{...state,messLogin};
			}
			return{...state};
		case Types.FETCH_USER:
			return{...state};
		case Types.FETCH_USER_SUCCESS:
			let user = action.payload.data;
			return{...state,user};
		default:
			return{...state};
	}
}

export default user;