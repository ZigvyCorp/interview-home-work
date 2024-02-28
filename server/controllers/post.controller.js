import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import Comment from "../models/comment.model.js";

export const createPost = async (req, res) => {
    try {
        const { title, body, userRef } = req.body;

        const user = await User.findById(userRef);
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const post = await Post.create({ title, body, userRef });

        return res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllPost = async (req, res) => {
    try {
        const { page = 1, searchTerm = "" } = req.query;

        const perPage = 10;
        const skip = (page - 1) * perPage;

        let query = {};

        if (searchTerm) {
            query = { title: { $regex: new RegExp(searchTerm, "i") } };
        }

        const posts = await Post.find(query).skip(skip).limit(perPage).exec();

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("comments");
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCommentsByPostId = async (req, res) => {
    try {
        const { postId } = req.params;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        const comments = await Comment.find({ postId });

        return res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
