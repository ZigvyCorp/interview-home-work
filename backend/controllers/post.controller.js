const Post = require('../models/Post');
const Comment = require('../models/Comment');
const DataPost = require('../../data/posts.json');
const { StatusCodes } = require('http-status-codes');

//[GET] /posts
const getPosts = (req, res) => {
    Post.find({})
        .populate('owner')
        .then((posts) => {
            res.status(200).json({
                status: 'success',
                message: 'Get list of posts successfully',
                data: posts,
            });
        });
};
//[GET] /search
const searchPosts = (req, res) => {
    const { query } = req.query;
    const postRegex = new RegExp(query, 'i');
    Post.find({ title: postRegex })
        .populate('owner')
        .then((posts) => {
            if (!posts) {
                res.status(404).json({
                    status: 'success',
                    message: 'No posts is matches',
                    data: {},
                });
            }
            res.status(200).json({
                status: 'success',
                message: 'Search posts successfully',
                data: posts,
            });
        });
};

//[GET] /posts?page=[number]&limit=[number] --Get posts and paginate
const getPostsAndPaginate = async (req, res) => {
    let { page, limit } = req.query;
    // validation req.query

    const posts = await Post.paginate({}, { page, limit, populate: 'owner' });
    res.status(StatusCodes.OK).json({ posts });
};

//[GET] /posts/:id
const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findOne({ _id: id }).populate('owner');
    res.status(StatusCodes.OK).json(post);
};

//[GET] /posts/:id/comments
const getCommentsInPost = async (req, res) => {
    const { id } = req.params;
    Comment.find({ post: id })
        .populate('owner')
        .then((comments) => {
            res.status(200).json({
                status: 'success',
                message: 'Get comments in post successfully',
                data: comments,
            });
        });
};

//[POST] /posts/create
const createPost = (req, res) => {
    const { idOwner, title, content, tags = [] } = req.body;
    if (!idOwner || !title || !content) {
        return res.status(400).json({
            status: 'error',
            message: "Can't create post",
            data: {},
        });
    }
    const newPost = new Post({
        title,
        content,
        tags,
        owner: idOwner,
    });
    newPost
        .save()
        .then((post) => {
            res.status(200).json({
                status: 'success',
                message: 'Insert post successfully',
                data: post,
            });
        })
        .catch((err) => {
            res.status(400).json({
                status: 'error',
                message: err,
                data: {},
            });
        });
};

module.exports = {
    getPosts,
    getPostsAndPaginate,
    getPostById,
    getCommentsInPost,
    searchPosts,
    createPost,
};
