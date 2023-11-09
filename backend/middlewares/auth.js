const jsonwebtoken = require('jsonwebtoken');
const httpStatus = require('http-status');
const Users = require('../models/userModel');

const auth = async (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "Invalid Token!"
        });
    }

    const decoded = jsonwebtoken.verify(token, 'Zigvy');
    if (!decoded) {
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "Invalid Token!"
        });
    }

    const user = await Users.findOne({ id: decoded._id });
    req.user = user;
    next();
};

module.exports = auth;