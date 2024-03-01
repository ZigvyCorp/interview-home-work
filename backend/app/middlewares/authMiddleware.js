const userModel = require("../models/userModel");

const status = require("../constants/constants");
const jwt = require("jsonwebtoken");

// Giải mã token
const verifyToken = async (req, res, next) => {
    try {
        console.log("verify token...");
        let token = req.headers["x-access-token"];
        console.log(token);
        if (!token) {
            return res.status(401).send({
                message: "x-access-token is not exist!",
            });
        }
        // check expiredToken
        const decodedToken = await jwt.decode(token);
        const accessTokenExpireTime = (await decodedToken.exp) * 1000;
        const timeNow = new Date();
        if (accessTokenExpireTime < timeNow) {
            return res.status(401).send({
                message: "AccessToken Expired",
            });
        }
        const secretKey = process.env.JWT_SECRET;
        const verified = await jwt.verify(token, secretKey);
        console.log(verified);
        if (!verified) {
            return res.status(401).send({
                message: "x-access-token is invalid!",
            });
        } else {
            const user = await userModel.findById(verified._id);
            req.user = user;
            next();
        }
    } catch (error) {
        status.errorStatus(res, error);
    }
};

const checkDuplicateUserName = async (req, res, next) => {
    try {
        const isExistEmail = await userModel.findOne({
            username: req.body.username
        })
        if (isExistEmail) {
            status.badRequestStatus(res, 'username has been registered')
        }
        next()
    } catch (error) {
        status.errorStatus(res, error);
    }
}

module.exports = {
    verifyToken,
    checkDuplicateUserName
};
