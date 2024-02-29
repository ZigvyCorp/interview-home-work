import { Post } from "../models/index.js";

const getPosts = async () => {
	return Post.find();
};

const getPostById = async (id) => {
	return Post.findOne({ id });
};

const userService = {
	getPosts,
	getPostById,
};

export default userService;
