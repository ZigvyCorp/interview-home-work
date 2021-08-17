import axios from 'axios';

export const POST_TYPES = {
	GET_POST: 'GET_POST',
	GET_SEARCH_POST: 'GET_SEARCH_POST'
};

export const getPosts = () => async (dispatch) => {
	try {
		const res = await axios.get('/posts');
		dispatch({ type: POST_TYPES.GET_POST, payload: res.data.posts });
	} catch (error) {
		console.log(error.response.data.msg);
	}
};

export const getSearchPost =
	({ id }) =>
	async (dispatch) => {
		try {
			const res = await axios.get(`/post/${id}`);
			dispatch({
				type: POST_TYPES.GET_SEARCH_POST,
				payload: res.data.post
			});
		} catch (error) {
			console.log(error.response.data.msg);
		}
	};
