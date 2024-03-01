const mongoose = require('mongoose')
const status = require('../constants/constants')
const userModel = require('../models/userModel')

const notFoundUser = 'Not found any user'

const getAllUsers = async (req, res) => {
    try {
        const userList = await userModel.find()
        if (userList && userList.length > 0) {
            status.successStatus(res, userList, 'Get all users successfully', userList.length)
        } else {
            status.notFoundStatus(res, notFoundUser)
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const getUserById = async (req, res) => {
    let userId = req.params.userId
    try {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'UserId is invalid')
        }
        const userInfo = await userModel.findById(userId)
        if (userInfo) {
            status.successStatus(res, userInfo, 'Get user by id successfully')
        } else {
            status.notFoundStatus(res, notFoundUser)
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const updateUserById = async (req, res) => {
    let userId = req.params.userId
    const {
        username,
        name,
        dob
    } = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'UserId is invalid')
        }
        if (!name) {
            status.badRequestStatus(res, 'name is required')
        }
        if (!username) {
            status.badRequestStatus(res, 'username is unique required')
        }
        let updateUser = req.body
        const updatedUser = await userModel.findByIdAndUpdate(userId, updateUser)
        if (updateUser) {
            status.successStatus(res, updatedUser)
        } else {
            status.notFoundStatus(res, notFoundUser)
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const deleteUserById = async (req, res) => {
    let userId = req.params.userId
    try {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'UserId is invalid')
        }
        const deletedUser = await userModel.findByIdAndDelete(userId)
        if (deletedUser) {
            status.successStatus(res, deletedUser, 'Delete user by id successfully')
        } else {
            status.notFoundStatus(res, notFoundUser)
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }

}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}