import User from '../models/user'
import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import crypto from 'crypto';

import { generateAccessToken, generateRefreshToken } from "../middlewares/jwt"
import { sendMail } from "../utils/sendMail"

const register = asyncHandler(async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    const otp = req.otp


    if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({
            success: false,
            msg: "Missing input!"
        })
    }

    const alreadyUser = await User.findOne({ email })

    if (alreadyUser) throw new Error("User is existed!")

    await User.create({ email, password, firstName, lastName, otp })
    const html = `Đây là mã OTP xác thực cho địa chỉ e-mail của bạn:
    <b>${otp}</b>. Mã có hiệu lực trong vòng 1 phút!`

    const data = {
        email, html, subject: "Verify email"
    }

    await sendMail(data)
    return res.status(200).json({
        success: true,
        msg: "Please check your email to verify!"
    })

})

const verifyEmailRegister = asyncHandler(async (req, res) => {
    const { email, otp } = req.body

    const user = await User.findOne({ email, otp })

    if (!user) {
        await User.deleteOne({ email });
        throw new Error("Invalid otp! Please sign up again")
    }
    user.otp = undefined
    await user.save()
    return res.status(200).json({
        success: true,
        msg: "Register successfully!"
    })


})


const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            msg: "Missing input!"
        })
    }

    const response = await User.findOne({ email })
    if (response && await response.isCorrectPassword(password)) {
        const { password, role, refreshToken, ...userData } = response.toObject()
        const accessToken = generateAccessToken(response._id, role)
        const newRefreshToken = generateRefreshToken(response._id)

        // lưu refreshToken vào model User
        await User.findByIdAndUpdate(response._id, { refreshToken: newRefreshToken }, { new: true })

        // lưu refreshToken vào cookie
        res.cookie("refreshToken", newRefreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })

        return res.status(200).json({
            success: true,
            msg: "Login is successfully!",
            accessToken,
            userData
        })
    } else {
        throw new Error("Email isn't exist or password is incorrect!")
    }



})


const refreshToken = asyncHandler(async (req, res) => {
    // lấy refresh token dưới cookie
    const cookie = req.cookies
    // nếu không có token thì báo lỗi
    if (!cookie && !cookie.refreshToken) throw new Error("No refresh token in cookie!")
    // nếu có token thì xác thực token
    const result = await jwt.verify(cookie.refreshToken, process.env.JWT_SECRET)
    const response = await User.findOne({ _id: result._id, refreshToken: cookie.refreshToken })
    return res.status(200).json({
        success: response ? true : false,
        newAccessToken: response ? generateAccessToken(response._id, response.role) : "Refresh Token not match!"
    })

})

const logout = asyncHandler(async (req, res) => {
    // lấy refresh token dưới cookie
    const cookie = req.cookies
    // nếu không có token thì báo lỗi
    if (!cookie && !cookie.refreshToken) throw new Error("No refresh token in cookie!")
    //    Xóa refeshToken ở DB
    await User.findOneAndUpdate({ refreshToken: cookie.refreshToken }, { refreshToken: "" }, { new: true })
    // Xóa refreshToken ở cookie
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true
    })
    return res.status(200).json({
        success: true,
        msg: "Logout is successfully!"
    })

})

const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body
    const otp = req.otp


    if (!email) {
        return res.status(400).json({
            success: false,
            msg: "Missing input!"
        })
    }

    const alreadyUser = await User.findOne({ email })

    if (!alreadyUser) throw new Error("Email is not existed!")

    alreadyUser.otp = otp
    await alreadyUser.save()
    const html = `Đây là mã OTP xác thực cho địa chỉ e-mail của bạn:
    <b>${otp}</b>. Mã có hiệu lực trong vòng 1 phút!`

    const data = {
        email, html, subject: "Reset Password"
    }

    await sendMail(data)
    return res.status(200).json({
        success: true,
        msg: "Please check your email to verify!"
    })

})

const verifyOTPResetPassword = asyncHandler(async (req, res) => {
    const { email, otp } = req.body

    const user = await User.findOne({ email, otp })


    if (!user) {
        const userUpdate = await User.findOne({ email })
        userUpdate.otp = undefined
        await userUpdate.save()
        throw new Error("Invalid otp! Please try again")
    }
    user.otp = undefined
    await user.save()
    return res.status(200).json({
        success: true,
        msg: "Verify successful!"
    })


})


const resetPassword = asyncHandler(async (req, res) => {
    const { password, email } = req.body

    if (!password) {
        return res.status(400).json({
            success: false,
            msg: "Missing input!"
        })
    }

    const user = await User.findOne({ email })
    if (!user) throw new Error("Please try again")
    user.password = password
    await user.save()

    return res.status(200).json({
        success: true,
        msg: "Password is updated!"
    })


})

const getCurrentUser = asyncHandler(async (req, res) => {

    const { _id } = req.user
    console.log('_id: ', _id);
    const user = await User.findById({ _id }).select("-refreshToken -password")
    console.log('user: ', user);

    return res.status(200).json({
        success: user ? true : false,
        response: user ? user : "User not found!",
    })


})


























module.exports = {
    register, login, getCurrentUser, refreshToken, logout, forgotPassword, resetPassword, verifyEmailRegister, verifyOTPResetPassword
}