const httpStatus = require('http-status');
const bcrypt = require('bcryptjs');

const Users = require('../models/userModel');
const generateToken = require('../utils/jwt');


const authController = {
    register: async (req, res) => {
        try {
            const { username, password } = req.body;

            const existUsername = await Users.findOne({ username });

            if (existUsername) {
                return res.status(httpStatus.CONFLICT).send({
                    message: "This username already used!"
                });
            }

            const hashPassword = await bcrypt.hash(password, 15);

            const newUser = new Users({ username, password: hashPassword });
            await newUser.save();

            return res.status(httpStatus.CREATED).send({
                message: "Register successfully!"
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            const user = await Users.findOne({ username });
            if (!user) {
                res.status(httpStatus.CONFLICT).send({
                    message: "Username not found!"
                });
            }

            const isValidPassword = await bcrypt.compareSync(password, user.password);
            if (!isValidPassword) {
                res.status(httpStatus.BAD_REQUEST).send({
                    message: "Wrong password!"
                });
            }

            const accessToken = generateToken({ id: user._id });

            res.cookie("accessToken", accessToken, {
                httpOnly: true
            })
                .status(httpStatus.OK)
                .send({
                    message: "Login success",
                    accessToken,
                    username
                });

        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    logout: (req, res) => {
        try {
            return res.clearCookie("accessToken")
                .status(httpStatus.OK).send({
                    message: "Logout!"
                });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    }

};

module.exports = authController;