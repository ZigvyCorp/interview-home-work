const mongoose = require('mongoose'); // Import Mongoose
const CommentModel = require('../models/CommentModel'); // Import Comment Model

// Get all Comment
const getAllComment = (request, response) => {
    CommentModel.find((error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal sever error",
                message: error.message
            });
        } else {
            return response.status(200).json({
                status: "Success",
                data: data
            });
        };
    });
};
// Create Comment
const createComment = (request, response) => {
    let content = request.body.content;
    let owner = request.body.owner;
    let post = request.body.post;

    CommentModel.create({
        _id: mongoose.Types.ObjectId(),
        content: content,
        owner: owner,
        post: post
    }, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal sever error",
                message: error.message
            });
        } else {
            return response.status(201).json({
                status: "Created",
                data: data
            });
        };
    });
}
// Get Comment By Id
const getCommentById = (request, response) => {
    let commentId = request.params.commentId; // Tạo id Comment
    // Validate theo Id
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return response.status(400).json({
            status: "Bad Request",
            message: "Comment Id is not valid"
        });
    };
    CommentModel.findById(commentId, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal Sever error",
                message: error.message
            })
        } else {
            if (data) {
                return response.status(200).json({
                    status: "Success",
                    data: data
                })
            } else {
                return response.status(404).json({
                    status: "Not Found"
                })
            }
        }
    })
}
// Update Comment By Id
const UpdateComment = (request, response) => {
    let content = request.body.content;
    let owner = request.body.owner;
    let post = request.body.post;
    let commentId = request.params.commentId; // Tạo id Comment
    CommentModel.findByIdAndUpdate(commentId, {
        content: content,
        owner: owner,
        post: post
    }, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal Sever Error",
                message: error.message
            })
        } else {
            if (data) {
                return response.status(200).json({
                    status: "Success",
                    data: data
                })
            } else {
                return response.status(404).json({
                    status: "Not Found"
                })
            }
        }
    })
}
// Delete Comment By Id
const deleteComment = (request, response) => {
    // Tạo  customer Id
    let commentId = request.params.commentId;
    // Validate customer Id
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return response.status(400).json({
            status: "Bad Request",
            message: " customer Id is not valid "
        });
    };
    CommentModel.findByIdAndDelete(commentId, (error) => {
        if (error) {
            return response.status(500).json({
                status: "Internal Sever Error",
                message: error.message
            })
        } else {
            return response.status(204).json()
        };
    });
};

module.exports = {
    getAllComment,
    createComment,
    getCommentById,
    UpdateComment,
    deleteComment
}