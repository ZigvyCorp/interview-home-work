const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { getPosts, getPost } = require("../services/post.service");

class PostController {
    getPosts = catchAsync(async (req, res) => {
        res.status(httpStatus.OK).json({
            httpStatusCode: httpStatus.OK,
            status: "Success",
            message: "Get posts success!",
            data: await getPosts(req.query)
        });
    });

    getPost = catchAsync(async (req, res) => {
        res.status(httpStatus.OK).json({
            httpStatusCode: httpStatus.OK,
            status: "Success",
            message: "Get post success!",
            data: await getPost(req.params.id)
        });
    });
}

module.exports = new PostController();