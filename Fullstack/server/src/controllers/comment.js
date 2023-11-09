import Comment from "../models/comment"
import asyncHandler from "express-async-handler"

const createComment = asyncHandler(async (req, res) => {
    const { _id } = req.user

    const newComment = await Comment.create({ ...req.body, postUserId: _id })

    return res.status(200).json({
        success: newComment ? true : false,
        msg: newComment ? "Create comment successfully!" : "Failed!"
    })



})


module.exports = { createComment }