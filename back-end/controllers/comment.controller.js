const Comment = require("../models/comment.model");

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getComments
}