import asyncHandler from "express-async-handler"


export const sendOtpEmail = asyncHandler(async (req, res, next) => {
    const generateOtp = () => {
        let number = ""
        for (let i = 0; i < 6; i++) {
            number += Math.floor(Math.random() * 10);
        }
        return number
    }

    const otp = generateOtp()


    req.otp = otp
    next()


})