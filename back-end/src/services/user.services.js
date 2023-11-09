const { BadRequest, Conflict } = require('../cores/fail')
const {UserModel} = require('../models/user.model')
const bcrypt = require('bcrypt')

class UserServices {
    async getAllUsers() {
        return await UserModel.find().lean()
    }

    async createUser(user) {

        const checkUser = await UserModel.findOne({username: user.username}).lean()

        if (checkUser) {
            throw new Conflict("Username is already exist")
        }

        if (user.password.length < 8) {
            throw new BadRequest("Password must be at least 8 characters")
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        user.password = hashPassword

        return await UserModel.create(user)
    }

    async getUserById(userId) {
        return await UserModel.findById(userId).lean()
    }
}

module.exports = new UserServices();