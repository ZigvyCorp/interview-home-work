const mongoose = require('mongoose'); // Import Mongoose
const PostModel = require('../models/PostModel'); // Import Post Model

// Get All Post
const getAllPost = (request, response) => {
    PostModel.find((error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            });
        } else {
            return response.status(200).json({
                status: "Success",
                data: data
            });
        };
    });
}
// Create Post of User
const createPostByUserId = (request, response) => {
    let title = request.body.title;
    let content = request.body.content;
    let tags = request.body.tags;
    let owner = request.body.owner;

    PostModel.create({
        _id: mongoose.Types.ObjectId(),
        title: title,
        content: content,
        tags: tags,
        owner: owner
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
// Get Post by Id
const getPostById = (request, response) => {
    let postId = request.params.postId; // tạo Id post
    // Validate
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return response.status(400).json({
            status: "Bad request",
            message: "Post Id is not valid"
        });
    };
    PostModel.findById(postId, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            });
        } else {
            if (data) {
                return response.status(200).json({
                    status: "Success",
                    data: data
                });
            } else {
                return response.status(404).json({
                    status: "Not found"
                });
            };
        };
    });
}
// Update Post By Id
const updatePost = (request, response) => {
    let title = request.body.title;
    let content = request.body.content;
    let tags = request.body.tags;
    let owner = request.body.owner;
    let postId = request.params.postId; // Tạo Post Id
    // Validate productId
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return response.status(400).json({
            status: "Bad request",
            message: "Post Id is not valid"
        });
    };
    PostModel.findByIdAndUpdate(postId, {
        title: title,
        content: content,
        tags: tags,
        owner: owner
    }, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            });
        } else {
            if (data) {
                return response.status(200).json({
                    status: "Success",
                    data: data
                });
            } else {
                return response.status(404).json({
                    status: "Not found"
                });
            };
        };
    });
}
// Delete Post By Id
const deletePost = (request, response) => {
    // Tạo biến Id
    let postId = request.params.postId;
    // Validate productIT
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return response.status(400).json({
            status: "Bad request",
            message: "order Id is not valid"
        })
    }
    PostModel.findByIdAndDelete(postId, (error) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        } else {
            return response.status(204).json()
        }
    })
}
module.exports = {
    getAllPost,
    createPostByUserId,
    getPostById,
    updatePost,
    deletePost
}