//Import router
const commentModel = require("../models/comment.model")
const postModel = require("../models/post.model")

// Import Thư viện Mongoose
const mongoose = require("mongoose")
// Hàm tạo productType
const createComment = async (req, res) => {
    // B1 Thu thập dữ liệu
    const { content } = req.body
    const user = req.params.userId
    const postId = req.query.postId
    // B2 Kiểm tra dữ liệu
    if (!user) {
        return res.status(400).json({
            status: "Bad request",
            message: "userId is required"
        })
    }
    if (!content) {
        return res.status(400).json({
            status: "Bad request",
            message: "content is required"
        })
    }
    if (!postId) {
        return res.status(400).json({
            status: "Bad request",
            message: "postId is required"
        })
    }
    // B3 Xử lý API
    const newComment = {
        _id: new mongoose.Types.ObjectId,
        user,
        content,
        post:postId
    }
    try {
        var result = await commentModel.create(newComment)
        var pushPost = await postModel.findByIdAndUpdate(postId, { $push: { comment: result._id } })
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
// Hàm lấy danh sách type
const getAllComment = async (req, res) => {
    // B1 Thu thập dữ liệu
    // B2 Kiểm tra dữ liệu
    // B3 Xử lý API
    try {
        var result = await commentModel.find()
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
const getCommentById = async (req, res) => {
    // B1 Thu thập dữ liệu
    const commentId = req.params.commentId
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }
    // B3 Xử lý API
    try {
        var result = await postModel.findById(commentId)
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
// Hàm update post
const updateCommentById = async (req, res) => {
    // B1 Thu thập dữ liệu
    const id = req.params.commentId
    const { title, content } = req.body
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }
    const newData = {
        content
    }
    // B3 Xử lý API
    try {
        var result = await postModel.findByIdAndUpdate(id, newData, { new: true })
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
// Hàm xoa post
const deleteCommentById = async (req, res) => {
    // B1 Thu thập dữ liệu
    const id = req.params.commentId
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }

    // B3 Xử lý API
    try {
        var result = await commentModel.findByIdAndDelete(id)
        const post = await postModel.findById(result.post);
        post.comment.pull(result._id);
        await post.save();
        return res.status(200).json({
            message: "Comment deleted "
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
module.exports = { createComment,getAllComment,getCommentById,updateCommentById,deleteCommentById }