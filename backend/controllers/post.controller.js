const httpStatus = require('http-status');
const Posts = require('../models/postModel');

const postController = {
    createPost: async (req, res) => {
        try {
            const { title, content, tags } = req.body;
            const newPost = new Posts({ title, content, owner: req.user._id, tags });
            await newPost.save();
            return res.status(httpStatus.CREATED).send({
                message: "Create post successfully!",
                post: {
                    ...newPost._doc,
                    owner: req.user
                }
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    getPosts: async (req, res) => {
        try {
            const { page, perPage } = req.query;

            const posts = await Posts.find()
                .populate("owner").sort('-created_at')
                .skip((page * perPage) - perPage)
                .limit(perPage);

            const totalPost = await Posts.countDocuments();

            return res.status(httpStatus.OK).send({
                message: "Get posts successfully!",
                posts,
                perPage: parseInt(perPage),
                currentPage: parseInt(page),
                totalItems: totalPost,
                totalPages: Math.ceil(totalPost / perPage)
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
    }
};

module.exports = postController;