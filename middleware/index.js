import { roles, users } from "../data/index.js";
import jwt from 'jsonwebtoken';

export const checkAuthentication = (req, res, next) => {
    // const bearerToken = req.headers.authentication;
    const bearerToken = req.headers.authorization
    if (!bearerToken) {
        return res.status(401).json({ message: `Bạn chưa đăng nhập` })
    }
    const token = bearerToken.split(" ")[1]
    try {
        const checkToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const userId = checkToken.id
        req.userId = userId
        next()
    }
    catch (error) {
        return res.status(401).json({
            message: " Bạn chưa login"
        })
    }
}

export const checkAuthorization = (key, action) => {
    return (req, res, next) => {
        const userId = req.userId
        const findUser = users.find(item => item.id == userId)
        const findRole = roles.find(item => item.id == findUser.role)
        const checkPermission = findRole.permission.find(item => item.key == key && item.action == action)
        if (!checkPermission) {
            return res.status(403).json({ message: `Bạn không có quyền` })
        }
        next()
    }
}

export const logMiddleWare = (req, res, next) => {
    console.log('Log middle ware')
    next()
}