import { GET_COMMENT, ICommentsTypes } from "../../types/comment.type";
import { getPost } from "../../utils/fetchAPI";
import { Dispatch } from "react";

export const getComments = async (dispatch: Dispatch<ICommentsTypes>) => {
	try {
		const res = await getPost("comments");
		console.log(res);
		dispatch({
			type: GET_COMMENT,
			payload: res.getAllComments,
		});
	} catch (error) {
		console.log(error);
	}
};
