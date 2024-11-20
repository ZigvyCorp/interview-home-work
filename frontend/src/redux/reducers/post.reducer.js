import { POST_TYPES } from '../actions/post.action';

const initialState = {
	posts: [],
	searchPost: []
};
const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_TYPES.GET_POST:
			// console.log(action.payload);
			return {
				...state,
				posts: action.payload
			};
		case POST_TYPES.GET_SEARCH_POST:
			// console.log(action.payload);
			return {
				...state,
				searchPost: [...state.searchPost, ...action.payload]
			};
		default:
			return state;
	}
};

export default postReducer;
