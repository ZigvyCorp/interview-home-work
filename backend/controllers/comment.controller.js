const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { getComments } = require("../services/comment.service");

class CommentController {
    getComments = catchAsync(async (req, res) => {
        res.status(httpStatus.OK).json({
            httpStatusCode: httpStatus.OK,
            status: "Success",
            message: "Get messages success",
            data: await getComments()
        });
    });
}

module.exports = new CommentController();