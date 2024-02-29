import { StatusCodes } from "http-status-codes";
import { postService, commentService } from "../services/index.js";

const getPosts = async (req, res) => {
	const posts = await postService.getPosts();
	res.status(StatusCodes.OK).json({ status: "success", data: { posts } });
};

const getPost = async (req, res) => {
	const post = await postService.getPostById(req.params.id);
	res.status(StatusCodes.OK).json({ status: "success", data: { post } });
};

const getComments = async (req, res) => {
	const comments = await commentService.getCommentsByPostId(req.params.id);
	res.status(StatusCodes.OK).json({ status: "success", data: { comments } });
};

export default { getPosts, getPost, getComments };
