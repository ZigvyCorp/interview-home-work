const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { getUsers } = require("../services/user.service");

class UserController {
    getUsers = catchAsync(async (req, res) => {
        res.status(httpStatus.OK).json({
            httpStatusCode: httpStatus.OK,
            status: "Success",
            message: "Get users success!",
            data: await getUsers()
        });
    });
}

module.exports = new UserController();