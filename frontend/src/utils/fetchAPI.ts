import axios from "axios";

export const getPost = async (url: string, token?: string) => {
	const res = await axios.get(`http://localhost:8000/api/${url}`, {
		headers: { Authorization: token },
	});

	return res.data;
};
