const { SuccessResponse } = require("../core/success.response");
const postService = require("../services/post.service");

async function getAllPost(req, res, next) {
    return new SuccessResponse({
        message: "Get post success",
        metadata: await postService.getAllPost(req.query),
    }).send(res);
}

async function getPostById(req, res, next) {
    return new SuccessResponse({
        message: "Get post success",
        metadata: await postService.getPostById({ id: req.params.id }),
    }).send(res);
}
module.exports = {
    getAllPost,
    getPostById,
};
