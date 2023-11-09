const httpStatus = require('http-status');
const Posts = require('../models/postModel');

const postController = {
    createPost: async (req, res) => {
        const { title, content } = req.body;

        const newPost = new Posts({ title, content, author: req.user._id });
        await newPost.save();

        return res.status(httpStatus.CREATED).send({
            message: "Create post successfully!",
            newPost: {
                ...newPost._doc,
                author: req.user
            }
        });
    },
    getPosts: async (req, res) => {

    },
    getPost: async (req, res) => {

    },
    searchPosts: async (req, res) => {

    }
};

module.exports = postController;