const User = require("../models/UserModel")
const bcrypt = require('bcrypt')
const { genneralAccessToken } = require("./JwtSevice")

const createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        const { username, password, name, dob} = data
        try {
            const checkUser = await User.findOne({
                username: username
            })
            if (checkUser !== null) {
                resolve({
                    status: 'OK',
                    message: 'Username is already',
                })
            }
            const hash = bcrypt.hashSync(password,10)
            const response = await User.create({
                username,
                password: hash,
                name,
                dob
            })
            if (response) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: response
                })
            }
        } catch (e) {
            reject (e)
        }
    })
}

const loginUser = (data) => {
    return new Promise(async (resolve, reject) => {
        const { username, password} = data
        try {
            const checkUser = await User.findOne({
                username: username
            })
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Username is not defined',
                })
            }
            const comparePassword = bcrypt.compareSync(password,checkUser.password)
            if(!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'Username or password incorrect',
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser.id,
            })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token
            })
        } catch (e) {
            reject (e)
        }
    })
}

const userDetail = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({
                _id: data
            })
            if (user === null) {
                resolve({
                    status: 'OK',
                    message: 'User is not defined',
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: user
            })
        } catch (e) {
            reject (e)
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    userDetail
}