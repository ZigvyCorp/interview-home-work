const commentRepository = require("../repositories/comment.repository");

async function getAllCommentByPost({ postId }) {
    const comments = await commentRepository.getAllCommentByPost({ postId });
    return comments;
}

module.exports = {
    getAllCommentByPost,
};
