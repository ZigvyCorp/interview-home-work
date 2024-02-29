import axiosClient from "./axios-client";
import { POST_URL } from "../configs";
import { userServices } from "./user.service";

export const postServices = { getPosts, getPostById };

async function getPosts(skip = 0, limit = 20, title = "") {
	const post = await axiosClient.get(`${POST_URL}`, {
		params: {
			title_like: title || undefined,
			_start: skip,
			_limit: limit,
		},
	});

	const promises = post.map(async (p) => {
		const [user, comments] = await Promise.all([
			userServices.getUserById(p.userId),
			getPostComments(p.id),
		]);

		// Jsonplaceholder API doesn't support tags
		return { ...p, tags: p?.tags || [], user, comments };
	});

	return Promise.all(promises);
}

function getPostById(id) {
	return axiosClient.get(`${POST_URL}/${id}`);
}

function getPostComments(id) {
	return axiosClient.get(`${POST_URL}/${id}/comments`);
}
