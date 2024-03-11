const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

const getPosts = async (req, res) => {
    try {
        const { keyword, batchSize, offset = 0 } = req.query;
        let filter = {};
        let options = {};
        const result = {};

        const numPosts = await Post.countDocuments();
        result.hasNext = numPosts > batchSize * offset;
        // result.total = numPosts;

        if (keyword) {
            filter = { $text: { $search: keyword } };
        }
        if (batchSize) {
            options = { limit: batchSize, skip: batchSize * offset };
        }
        const posts = await Post.find(filter, null, options);
        result.data = posts;
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await Post.find({ id: id });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCommentFromPost = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await Comment.find({ postId: id });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getPosts,
    getPostById,
    getCommentFromPost
}