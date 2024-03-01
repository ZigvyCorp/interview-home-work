const { v4: uuidv4 } = require('uuid')
const refreshToken = require('../models/refreshToken')

const createToken = async (user) => {
    let expiredAt = new Date()
    expiredAt.setSeconds(
        expiredAt.getSeconds() + Number(process.env.JWT_REFRESH_EXPIRATION)
    )
    let token = uuidv4()

    let refreshTokenObj = await refreshToken.create({
        token: token,
        user: user._id,
        expiredDate: expiredAt.getTime()
    })
    return refreshTokenObj.token
}
module.exports = createToken