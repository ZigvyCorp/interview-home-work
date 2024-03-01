const User = require('../models/User')
const ServiceResponse = require('../response/ServiceResponse')
const Messages = require('../utils/Messages')
const jwt = require('jsonwebtoken')
const constants = require('../constant/index')

class UserService {

    async register(username, name, password) {

        try {

            const findUser = await User.findOne({ username }).exec()
            if (findUser) {

                return new ServiceResponse(400, false, Messages.USER_IS_EXISTING)
            } else {

                const user = new User({ username, name, password })
                if (user) {

                    await user.save()
                    return new ServiceResponse(200, true, Messages.REGISTER_SUCCESS)
                }
            }
        } catch (err) {

            console.log(err)
            return new ServiceResponse(400, false, Messages.INTERNAL_SERVER_ERROR)
        }
    }

    async login(username, password) {

        try {
            const findUser = await User.findOne({ username }).exec()
            if (findUser) {

                const confirm = findUser.password === password

                if (confirm) {

                    const token = jwt.sign(
                        { username: findUser.username },
                        constants.TOKEN_KEY,
                        {
                            expiresIn: constants.ExpiresIn,
                        }
                    )

                    return new ServiceResponse(200, true, Messages.LOGIN_SUCCESS, { token })

                } else {

                    return new ServiceResponse(400, false, Messages.PASSWORD_NOT_MATCH)
                }
            } else {

                return new ServiceResponse(404, false, Messages.USER_NOT_FOUND)
            }
        } catch (err) {
            return new ServiceResponse(400, false, Messages.INTERNAL_SERVER_ERROR)
        }
    }
}

module.exports = new UserService
