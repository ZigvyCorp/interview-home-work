
const refreshTokenModel = require("../models/refreshToken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const status = require("../constants/constants");
const createToken = require("../services/refreshToken.service");
const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModel");

require('dotenv').config()

// API đăng ký
const signUp = async (req, res) => {
    try {
        // B2: validate dữ liệu
        if (!req.body.username) {
            status.badRequestStatus(res, "username is required");
        }
        if (!req.body.password) {
            status.badRequestStatus(res, "Password is required")
        }
        const createdUser = await userModel.create({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 6),
            name: req.body.name,
            dob: req.body.dob,
            create_at: req.body.create_at
        });
        status.successStatus(res, createdUser, "Signup successfully");
    } catch (error) {
        status.errorStatus(res, error);
    }
};

// API đăng nhập
const logIn = async (req, res) => {
    try {
        // Tìm trong userModel bằng username
        const isExistUser = await userModel.findOne({
            username: req.body.username,
        });
        if (!isExistUser) {
            return status.notFoundStatus(res, "username has not been registered");
        }

        // Check password => true/false
        const isCorrectPassword = bcrypt.compareSync(
            req.body.password,
            isExistUser.password
        );
        if (!isCorrectPassword) {
            return res.status(401).json({
                message: "Password is invalid",
            });
        }
        // tạo token
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign({ id: isExistUser._id }, secretKey, {
            algorithm: "HS256",
            allowInsecureKeySizes: true,
            expiresIn: 86400, // 1 ngày
        });
        // Tạo thêm refreshToken
        const refreshToken = await createToken(isExistUser);
        status.successStatus(
            res,
            {
                accessToken: token,
                refreshToken: refreshToken,
                account: isExistUser,
            },
            "Login successfully"
        );
    } catch (error) {
        status.errorStatus(res, error);
    }
};

// API sửa password
const changePass = async (req, res) => {
    try {
        const userId = req.params.userId
        const { oldPass, newPass } = req.body
        // Tìm trong userModel bằng email
        const isExistUser = await userModel.findById(userId)
        // Check password => true/false
        const isCorrectPassword = bcrypt.compareSync(
            oldPass,
            isExistUser.password
        );
        if (!isCorrectPassword) {
            return res.status(401).json({
                message: "Password is wrong",
            });
        } else {
            const changedPass = await userModel.findByIdAndUpdate(userId, { password: bcrypt.hashSync(newPass, 6) })
            if (changedPass) {
                status.successStatus(res, changedPass, 'Change password successfully')
            } else {
                status.notFoundStatus(res, 'Change password unsuccessfully')
            }
        }

    } catch (error) {
        status.errorStatus(res, error)
    }
}


// API tạo 1 refreshToken
const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (refreshToken == null) {
        status.tokenStatus(res, "Refreshtoken is required");
    }
    try {
        console.log(Number(process.env.JWT_EXPIRATION));
        const refreshTokenObj = await refreshTokenModel.findOne({
            token: refreshToken,
        });
        if (!refreshTokenObj) {
            status.tokenStatus(res, "Not found any refresh token");
        }
        if (refreshTokenObj.expiredDate.getTime() < new Date().getTime()) {
            // Refresh token đã hết hạn
            await refreshTokenModel.findByIdAndRemove(refreshTokenObj._id);

            return res.status(403).json({
                message: "Refresh token was expired!",
            });
        }
        const secretKey = process.env.JWT_SECRET;
        const newAccessToken = jwt.sign({ id: refreshTokenObj.user }, secretKey, {
            algorithm: "HS256",
            allowInsecureKeySizes: true,
            expiresIn: Number(process.env.JWT_EXPIRATION), // 1 ngày
        });
        status.successStatus(res, {
            accessToken: newAccessToken,
            refreshToken: refreshTokenObj.token,
        });
    } catch (error) {
        status.errorStatus(res, error);
    }
};
module.exports = {
    signUp,
    logIn,
    refreshToken,
    changePass
};
