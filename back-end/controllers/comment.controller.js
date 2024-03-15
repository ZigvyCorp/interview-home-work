const Comment = require("../models/comment.model");

const getComments = async (req, res) => {
    try {
        const { postId } = req.query;
        const query = postId ? { postId } : {};
        const comments = await Comment.find(query);
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getComments,
}