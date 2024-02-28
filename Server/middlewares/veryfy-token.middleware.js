const jwt = require("jsonwebtoken");
const {RESPONSE_CODE} = require("../constants");
const {getTimeStampSecond} = require("../utils/date");

const authenticate = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        const secretKey = "post-api";
        const decode = jwt.verify(JSON.parse(token), secretKey);
        if (decode.exp < getTimeStampSecond()) {
            return res
                .status(RESPONSE_CODE.FORBIDDEN)
                .send("Unauthenticated");
        }
        const {id, userName, email} = decode;
        req.user = {id, userName, email};
        next();
    } catch (error) {
        res
            .status(RESPONSE_CODE.BAD_REQUEST)
            .send("Please login");
    }
};

const authorize =
    (...arrRole) =>
        (req, res, next) => {
            const {user} = req;
            const {role} = user;
            const index = arrRole.findIndex((_role) => _role === role);
            if (index === -1)
                return res
                    .status(RESPONSE_CODE.FORBIDDEN)
                    .send("Unauthenticated");
            next();
        };

module.exports = {
    authenticate,
    authorize,
};
