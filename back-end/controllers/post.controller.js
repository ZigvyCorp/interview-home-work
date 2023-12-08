const Post = require("../models/post.model");

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
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

module.exports = {
    getPosts,
    getPostById
}