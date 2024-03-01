import * as userService from '../services/userService'

const getAllUsers = async (req, res) => {
    try {
        const response = await userService.getAllUsers()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Error at user controller ' + error
        })
    }
}

const getUserDetail = async (req, res) => {
    const { query } = req
    try {
        if (!query) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing query'
            })
        }
        const response = await userService.getUserDetail(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Error at user controller ' + error
        })
    }
}

module.exports = {
    getAllUsers,
    getUserDetail
}