import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

const getPost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await PostMessage.findById(id);

        return res.status(200).json({
            status: "Success",
            data: post,
        });
    } catch (err) {
        return res.status(404).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const getPosts = async (req, res) => {
    try {
        const { page } = req.query;

        const limit = 8;
        const startIndex = (Number(page) - 1) * limit; // get the starting index of every page
        const total = await PostMessage.countDocuments({});

        const posts = await PostMessage.find()
            .sort({ _id: -1 })
            .limit(limit)
            .skip(startIndex);

        return res.status(200).json({
            status: "Success",
            results: posts.length,
            currentPage: Number(page),
            totalPage: Math.ceil(total / limit),
            data: posts,
        });
    } catch (err) {
        return res.status(404).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const createPost = async (req, res) => {
    try {
        const post = req.body;

        const newPost = await PostMessage.create({
            ...post,
            creator: req.userId,
            createdAt: new Date().toISOString(),
        });

        if (newPost) {
            return res.status(201).json({
                status: "Success",
                data: newPost,
            });
        }
    } catch (err) {
        return res.status(409).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await PostMessage.findById(id);

        if (post) {
            await PostMessage.deleteOne(post);

            return res.status(204).json({
                status: "Deleted",
            });
        }
    } catch (err) {
        return res.status(409).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const patchPost = async (req, res) => {
    try {
        const { id: _id } = req.params;

        const post = req.body;

        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).json({
                status: "Fail",
                message: "Not post with that id",
            });

        const patchedPost = await PostMessage.findByIdAndUpdate(
            _id,
            { ...post, _id },
            {
                new: true,
            }
        );

        return res.status(200).json({
            status: "Success",
            data: patchedPost,
        });
    } catch (err) {
        return res.status(404).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const likePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.userId)
            return res.json({
                status: "Fail",
                message: "Unauthenticated. Please login before.",
            });

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                status: "Fail",
                message: "No post found",
            });
        }

        const post = await PostMessage.findById(id);

        const index = post.likes.findIndex((id) => id === String(req.userId));

        if (index === -1) {
            // like the post
            post.likes.push(req.userId);
        } else {
            // dislike a post
            post.likes = post.likes.filter((id) => id !== String(req.userId));
        }

        const updatePost = await PostMessage.findByIdAndUpdate(id, post, {
            new: true,
        });

        return res.status(200).json({
            status: "Success",
            data: updatePost,
        });
    } catch (err) {
        return res.status(404).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const commentPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { value } = req.body;

        const post = await PostMessage.findById(id);

        post.comments.push(value);

        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
            new: true,
        });

        return res.status(200).json({
            status: "Success",
            data: updatedPost,
        });
    } catch (err) {
        return res.status(404).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const getPostsBySearch = async (req, res) => {
    try {
        const { searchQuery, tags } = req.query;
        const title = new RegExp(searchQuery, "i");
        const posts = await PostMessage.find({
            $or: [{ title }, { tags: { $in: tags.split(",") } }],
        });
        return res.status(200).json({
            status: "Success",
            results: posts.length,
            data: posts,
        });
    } catch (error) {
        return res.status(404).json({
            status: "Fail",
            message: err.message,
        });
    }
};

export {
    getPost,
    getPosts,
    createPost,
    deletePost,
    patchPost,
    likePost,
    commentPost,
    getPostsBySearch,
};
