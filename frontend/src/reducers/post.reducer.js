import { appConstants, postConstants } from "../constants";

const initialState = {
	data: [],
	keyword: "",
	hasMore: true,
	loading: false,
	error: null,
};

export function post(state = initialState, action) {
	switch (action.type) {
		case postConstants.GET_POSTS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case postConstants.GET_POSTS_SUCCESS:
			return {
				...state,
				data: [...state.data, ...action.payload],
				loading: false,
				hasMore: action.payload.length > 0,
			};

		case postConstants.GET_POSTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case postConstants.SET_KEYWORD:
			return {
				...state,
				data: [],
				keyword: action.payload,
			};

		case appConstants.RE_INITIALIZE:
			return initialState;

		default:
			return state;
	}
}
