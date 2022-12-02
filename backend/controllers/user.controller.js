const { validationResult } = require('express-validator');
const moment = require('moment');

const User = require('../models/User');

const getUsers = function (req, res) {
    User.find({})
        .then((user) => {
            res.status(200).json({
                status: 'success',
                message: 'Get user successfully',
                data: user,
            });
        })
        .catch((err) => {
            res.status(400).json({
                status: 'error',
                message: err,
                data: {},
            });
        });
};

const createUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            message: errors.array()[0].msg,
            data: {},
        });
    }
    const { username, password, name = '', dob } = req.body;
    const dateValid = moment(dob, 'MM/DD/YYYY', true).isValid();
    if (!username || !password || !dateValid) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid username or password',
            data: {},
        });
    }
    const dateOfBirth = new Date(dob);
    User.findOne({ username })
        .exec()
        .then((user) => {
            if (user) {
                res.status(400).json({
                    status: 'error',
                    message: 'User already exists',
                    data: {},
                });
            } else {
                const newUser = new User({
                    username,
                    password,
                    name,
                    dob: dateOfBirth,
                });
                newUser.save().then((user) => {
                    res.status(200).json({
                        status: 'success',
                        message: 'Create User successfully',
                        data: user,
                    });
                });
            }
        });
};

module.exports = {
    getUsers,
    createUser,
};
