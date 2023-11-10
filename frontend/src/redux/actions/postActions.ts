import { GET_POST, IPostTypes } from "../../types/posts.type";
import { getPost } from "../../utils/fetchAPI";
import { Dispatch } from "react";

export const getPosts = async (dispatch: Dispatch<IPostTypes>) => {
	try {
		const res = await getPost("posts");
		dispatch({
			type: GET_POST,
			payload: res.newPost,
		});
	} catch (error) {
		console.log(error);
	}
};
