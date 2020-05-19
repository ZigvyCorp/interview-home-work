import BlogModel from "../../shared/models/Blog";
import { REHYDRATE } from 'redux-persist';

const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
	fetching: false,
	skip: 0,
	blogs: [],
};

type BlogWrapperActionType = {
	type: string,
	data: BlogModel[],
	error: any,
}


export default function reducer(state = initialState, action: BlogWrapperActionType) {
	switch (action.type) {
		case API_CALL_REQUEST:
			return { ...state, fetching: true, error: null };
		case API_CALL_SUCCESS:
			return { ...state, fetching: false, blogs: action.data };
		case REHYDRATE:
			return { ...state, fetching: false, blogs: action.data };
		case API_CALL_FAILURE:
			return { ...state, fetching: false, blogs: [], error: action.error };
		default:
			return state;
	}
}