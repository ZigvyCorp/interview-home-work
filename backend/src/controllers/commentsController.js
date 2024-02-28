const Comments = require("../models/commentsModel");

// getall
const getComments = async (req, res) => {

    if (req.query.postId) {
        getCommentsByPostId(req.query.postId, res);
    } else {
        try {
            const comments = await Comments.find();
            res.json(comments);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

}


// get by id
const getCommentsByPostId = async (postId, res) => {
    try {
        const comment = await Comments.find({ postId: postId });
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json({
                message: "Comment not found"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = {
    getCommentsByPostId,
    getComments,

}
