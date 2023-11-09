const { SuccessResponse } = require("../core/success.response");
const commentService = require("../services/comment.service");

async function getAllController(req, res, next) {
    return new SuccessResponse({
        message: "Get comment success",
        metadata: await commentService.getAllCommentByPost({
            postId: req.params.postId,
        }),
    }).send(res);
}

module.exports = {
    getAllController,
};
