import PostModel from "../models/Post.js";
import UserModel from "../models/User.js";
import CommentModel from "../models/Comment.js";

export const getAllPosts = async (req, res) => {
    // Convert request query from client to integer
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const posts = await PostModel
        .find()
        .skip((limit * page) - limit)
        .limit(limit)
        .populate("userId", "name");

    const data = await Promise.all(posts.map(async (post) => {
        const comments = await CommentModel.find({ postId: post._id.toString() }).populate("userId", "name");
        return { post, comments };
    }));

    return res.status(200).json({
        data,
        totalPages: Math.ceil(100 / limit),
        currentPage: page,
    });
}

export const getPostDetail = async (req, res) => {
    const { id } = req.params;
    const post = await PostModel.findById(id).populate("userId", "name");

    if (!post) {
        return res.status(404).json("Not Found");
    }

    const comments = await CommentModel.find({ postId: post._id.toString() }).populate("userId", "name");

    return res.status(200).json({
        post,
        comments
    });
}

export const getPostResult = async (req, res) => {
    const { q } = req.query;
    const post = await PostModel.findOne({ title: q }).populate("userId", "name");

    if (!post) {
        return res.status(404).json("Not Found");
    }

    const comments = await CommentModel.find({ postId: post._id.toString() }).populate("userId", "name");

    return res.status(200).json({
        post,
        comments
    });
}