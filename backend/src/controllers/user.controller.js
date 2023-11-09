const { SuccessResponse } = require("../core/success.response");
const userService = require("../services/user.service");

async function getUserById(req, res, next) {
    return new SuccessResponse({
        message: "Get user success",
        metadata: await userService.getUserById(req.params),
    }).send(res);
}
async function getListUser(req, res, next) {
    return new SuccessResponse({
        message: "Get list user success",
        metadata: await userService.getListUser(),
    }).send(res);
}

module.exports = {
    getUserById,
    getListUser,
};
