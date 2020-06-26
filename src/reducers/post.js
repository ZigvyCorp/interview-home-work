import * as Types from './../constants/post';

let initialState = {
	component:null,
	title:'',
	mess:'',
	listPostUser:null,
	listAllPost:null,
	totalPost:'',
	keyword:'',
	page:''
};

const post = (state = initialState, action) =>{
	switch(action.type){
		case Types.ADD_CONTENT_FORM:
			let {title,component} = action.payload;
			return{
				...state,
				title:title,
				component:component
			};
		case Types.FETCH_POST_USER:
			return{...state};
		case Types.FETCH_POST_USER_SUCCESS:
			let user = action.payload.data;
			return{...state,listPostUser:user};
		case Types.ADD_POST:
			return{...state};
		case Types.ADD_POST_SUCCESS:
			let post = action.payload.data.newPost;
			let newListPostUser = [post,...state.listPostUser];
			return{...state,listPostUser:newListPostUser};
		case Types.FETCH_POST_ALL:
			return{...state};
		case Types.FETCH_POST_ALL_SUCCESS:
			let allPost = action.payload.data;
			return{...state,listAllPost:allPost};
		case Types.COUNT_POST_ALL:
			return{...state};
		case Types.COUNT_POST_ALL_SUCCESS:
			const {leng} = action.payload.data;
			return{...state,totalPost:leng};
		case Types.SEARCH_POST:
			const {keyword} = action.payload;
			return{...state,keyword};
		case Types.PAGINATION_POST_ALL:
			const {page} = action.payload;
			return{...state,page};
		case 'CHANGE_PAGE':
			const pages = action.payload.page;
			return{...state,page:pages};

		default:
			return {...state};
	}
}

export default post;