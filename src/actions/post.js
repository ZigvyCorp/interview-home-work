import * as Types from './../constants/post';

export const addContentForm = (component,title) =>{
	return{
		type: Types.ADD_CONTENT_FORM,
		payload:{
			component,
			title
		}
	}
}

export const addPost = post =>{
	return{
		type: Types.ADD_POST,
		payload:{
			post
		}
	}
}

export const addPostSuccess = data =>{
	return{
		type: Types.ADD_POST_SUCCESS,
		payload:{
			data
		}
	}
}

export const fetchPostUser = id =>{
	return{
		type: Types.FETCH_POST_USER,
		payload:{
			id
		}
	}
}

export const fetchPostUserSuccess = data =>{
	return{
		type: Types.FETCH_POST_USER_SUCCESS,
		payload:{
			data
		}
	}
}

export const fetchPostAll = params =>{
	return{
		type: Types.FETCH_POST_ALL,
		payload:{
			params
		}
	}
}

export const fetchPostAllSuccess = data =>{
	return{
		type: Types.FETCH_POST_ALL_SUCCESS,
		payload:{
			data
		}
	}
}

export const searchPost = keyword =>{
	return{
		type: Types.SEARCH_POST,
		payload:{
			keyword
		}
	}
}

export const paginationPostAll = page =>{
	return{
		type: Types.PAGINATION_POST_ALL,
		payload:{
			page
		}
	}
}

export const countPostAll = () =>{
	return{
		type: Types.COUNT_POST_ALL
	}
}

export const countPostAllSuccess = data =>{
	return{
		type: Types.COUNT_POST_ALL_SUCCESS,
		payload:{
			data
		}
	}
}