import * as types from "../../types/posts.type";
import { IPosts } from "../../types/posts.type";

export const posts = (
	state: IPosts[] = [],
	action: types.IPostTypes
): IPosts[] => {
	switch (action.type) {
		case types.GET_POST:
			return action.payload;
		default:
			return state;
	}
};
