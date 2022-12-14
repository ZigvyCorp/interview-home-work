import { baseService } from "./BaseService";

export class PostServices extends baseService {
	getAllPosts = () => {
		return this.get("/posts");
	};

	getPostByUserID = (userID) => {
		return this.get(`/users/${userID}/posts`);
	};

	getAllComments = () => {
		return this.get(`/comments`);
	};

	getCommentsOfPost = (postId) => {
		return this.get(`/comments?postId=${postId}`);
	};
}

export const postServices = new PostServices();
