import {
	GET_COMMENT,
	IComment,
	ICommentsTypes,
} from "../../types/comment.type";

export const comments = (
	state: IComment[] = [],
	action: ICommentsTypes
): IComment[] => {
	switch (action.type) {
		case GET_COMMENT:
			return action.payload;
		default:
			return state;
	}
};
