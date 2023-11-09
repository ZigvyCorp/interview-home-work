import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"

const verifyToken = asyncHandler(async (req, res, next) => {
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    msg: "Invalid access token!"
                })
            } else {
                req.user = decode
                next()
            }

        })
    } else {
        return res.status(401).json({
            success: false,
            msg: "Required authentication!"
        })
    }

})

const isAdmin = asyncHandler(async (req, res, next) => {
    const { role } = req.user
    if (role !== "admin") {
        return res.status(401).json({
            success: false,
            msg: "Required admin role!"
        })
    }
    next()
})

module.exports = {
    verifyToken, isAdmin
}