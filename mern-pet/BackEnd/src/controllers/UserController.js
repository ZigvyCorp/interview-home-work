const UserService = require('../services/UserService')

const createUser = async (req, res) =>  {
    try {
        const {username, password} = req.body
        if (!username || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Input is required'
            })
        }
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const loginUser = async (req, res) =>  {
    try {
        const {username, password} = req.body
        if (!username || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Input is required'
            })
        }
        const response = await UserService.loginUser(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const userDetail = async (req, res) =>  {
    try {
        const userId = req.params.id
        if(!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'UserId is required'
            })
        }
        const response = await UserService.userDetail(userId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser,
    loginUser,
    userDetail
}