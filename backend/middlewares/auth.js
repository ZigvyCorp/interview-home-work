const jsonwebtoken = require('jsonwebtoken');
const httpStatus = require('http-status');
const Users = require('../models/userModel');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(httpStatus.UNAUTHORIZED).send({
                message: "Invalid Token!"
            });
        }

        const decoded = jsonwebtoken.verify(token, process.env.SECRET_TOKEN);
        if (!decoded) {
            return res.status(httpStatus.UNAUTHORIZED).send({
                message: "Invalid Token!"
            });
        }

        const user = await Users.findOne({ id: decoded._id });
        req.user = user;
        next();
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }

};

module.exports = auth;