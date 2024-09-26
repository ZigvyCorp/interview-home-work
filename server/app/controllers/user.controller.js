//Import router
const userModel = require("../models/user.model")
// Import Thư viện Mongoose
const mongoose = require("mongoose")
// Hàm tạo user
const createUser = async (req, res) => {
    // B1 Thu thập dữ liệu
    const { name } = req.body
    // B2 Kiểm tra dữ liệu
    if (!name) {
        return res.status(400).json({
            status: "Bad request",
            message: "name is required"
        })
    }
    // find exist user by phone
    const existUser = await userModel.findOne({
        name
    })
    // phone used
    if (existUser) {
        return res.status(400).json({
            message: "name was used"
        })
    }
    // B3 Xử lý API
    const newUser = {
        _id: new mongoose.Types.ObjectId,
        name
    }
    try {
        var result = await userModel.create(newUser)
        return res.status(201).json({
            result
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
// Hàm lấy danh sách user
const getAllUser = async (req, res) => {
    // B1 Thu thập dữ liệu
    // B1 Thu thập dữ liệu
    const name = req.query.name
    const condition = {}
    // B2 Kiểm tra dữ liệu
    if (name) {
        condition.name = name
    }
    // B3 Xử lý API
    try {
        var result = await userModel.find(condition)
        return res.status(200).json({
            result
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
// Hàm lấy user bằng id
const getUserById = async (req, res) => {
    // B1 Thu thập dữ liệu
    const userId = req.params.userId
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }
    // B3 Xử lý API
    try {
        var result = await userModel.findById(userId).populate("post")
        return res.status(200).json({
            result
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
// Hàm update user
const updateUserById = async (req, res) => {
    // B1 Thu thập dữ liệu
    // B1 Thu thập dữ liệu
    const id = req.params.userId
    const { name } = req.body

    // B2 Kiểm tra dữ liệu
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }
    const newData = {
        name
    }
    // B3 Xử lý API
    try {
        var result = await userModel.findByIdAndUpdate(id, newData,{ new: true })
        return res.status(200).json({
            result
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
// Hàm xoa user
const deleteUserById = async (req, res) => {
    // B1 Thu thập dữ liệu
    const id = req.params.userId
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }

    // B3 Xử lý API
    try {
        var result = await userModel.deleteUserById(id)
        return res.status(200).json({
            message:"User deleted "
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
module.exports = { createUser, getAllUser, getUserById,updateUserById,deleteUserById }