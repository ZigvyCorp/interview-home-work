const httpStatus = require('http-status');
const Posts = require('../models/postModel');

const postController = {
    createPost: async (req, res) => {
        try {
            const { title, content } = req.body;

            const newPost = new Posts({ title, content, author: req.user._id });
            await newPost.save();

            return res.status(httpStatus.CREATED).send({
                message: "Create post successfully!",
                post: {
                    ...newPost._doc,
                    author: req.user
                }
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    getPosts: async (req, res) => {
        try {
            console.log("vo day!");
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    getPost: async (req, res) => {
        try {
            const post = await Posts.findById(req.params.id);

            if (!post) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message: "Not found!"
                });
            }

            return res.status(httpStatus.OK).send({
                message: "Get post successfully!",
                post
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    searchPosts: async (req, res) => {
        try {
            console.log(req.query.keyword);
            // const posts = await Post.find({})

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    }
};

module.exports = postController;