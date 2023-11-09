const Comment = require("../models/comment.model");

async function getAllCommentByPost({ postId }) {
    const data = await Comment.findAll({
        where: {
            post: postId,
        },
        raw: true,
    });
    return data;
}

module.exports = { getAllCommentByPost };
