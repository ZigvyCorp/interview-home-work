const User = require('../models/user.model.js')
const {
    ERROR_CODE,
    SUCCESS_CODE,
    SUCCESS_MESSAGE,
} = require('../constants/code.constants.js')
// const paginate = require('express-paginate');
//
const getUsers = async (req, res) => {
    try {

        return res.status(200).json({
            success: true,
            data: ["hello"],
            message: SUCCESS_MESSAGE,
            // code: SUCCESS_CODE,
            // totalPage: pageCount,
            // currentPage: page,
            // hasMore: paginate.hasNextPages(req)(pageCount)
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message, code: ERROR_CODE })
    }
}
//
// const getUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const user = await User.findById(id)
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' })
//         }
//         return res.status(200).json({
//             success: true,
//             data: user,
//             message: SUCCESS_MESSAGE,
//             code: SUCCESS_CODE
//         })
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message, code: ERROR_CODE })
//     }
// }
//
// const createUser = async (req, res) => {
//     try {
//         const user = await User.create(req.body)
//         return res.status(201).json({
//             success: true,
//             data: user,
//             message: SUCCESS_MESSAGE,
//             code: SUCCESS_CODE
//         })
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message, code: ERROR_CODE })
//     }
// }
//
// const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const user = await User.findByIdAndUpdate(id, req.body)
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' })
//         }
//
//         const userUpdate = await User.findById(id)
//         return res.status(200).json({
//             success: true,
//             data: userUpdate,
//             message: SUCCESS_MESSAGE,
//             code: SUCCESS_CODE
//         })
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message, code: ERROR_CODE })
//     }
// }
//
// const deleteUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const user = await User.findByIdAndDelete(id)
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' })
//         }
//
//         return res.status(200).json({
//             success: true,
//             data: [],
//             message: SUCCESS_MESSAGE,
//             code: SUCCESS_CODE
//         })
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message, code: ERROR_CODE })
//     }
// }
//
module.exports = {
    getUsers,
}