const Post = require('../models/Post');
const Comment = require('../models/Comment');
const DataPost = require('../../data/posts.json');

//[GET] /posts
const getPosts = (req, res) => {
    Post.find({})
        .populate('owner')
        .then(posts => {
            res.status(200).json({
                status: 'success',
                message: 'Get list of posts successfully',
                data: posts
            });
        });
};
//[GET] /search
const searchPosts = (req, res) => {
    const { query } = req.query;
    const postRegex = new RegExp(query, 'i');
    Post.find({ title: postRegex })
        .populate('owner')
        .then(posts => {
            if (!posts) {
                res.status(404).json({
                    status: 'success',
                    message: 'No posts is matches',
                    data: {}
                });
            }
            res.status(200).json({
                status: 'success',
                message: 'Search posts successfully',
                data: posts
            });
        });
};
//[GET] /posts?page=[number]&pagesize=[number] --Get posts and paginate
const getPostsAndPaginate = (req, res) => {
    let { page = 1, pagesize = 10 } = req.query;
    //Check input
    if (isNaN(page) || isNaN(pagesize) || page <= 0 || pagesize <= 0) {
        page = 1;
        pagesize = 10;
    }
    Post.find({})
        .populate('owner')
        .skip((page - 1) * pagesize)
        .limit(pagesize)
        .then(posts => {
            res.status(200).json({
                status: 'success',
                message: 'Get list of posts and paginate successfully',
                data: posts,
            });
        });
};

//[GET] /posts/:id
const getPostById = (req, res) => {
    const { id } = req.params;
    Post.findOne({ _id: id })
        .populate('owner')
        .exec()
        .then(post => {
            res.status(200).json({
                status: 'success',
                message: 'Get post by id successfully',
                data: post,
            });
        });
};

//[GET] /posts/:id/comments
const getCommentsInPost = (req, res) => {
    const { id } = req.params;
    Comment.find({ post: id })
        .populate('owner')
        .then(comments => {
            res.status(200).json({
                status: 'success',
                message: 'Get comments in post successfully',
                data: comments
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
            data: {}
        });
    }
    const newPost = new Post({
        title,
        content,
        tags,
        owner: idOwner
    });
    newPost.save().then(post => {
        res.status(200).json({
            status: 'success',
            message: 'Insert post successfully',
            data: post
        });
    }).catch(err => {
        res.status(400).json({
            status: 'error',
            message: err,
            data: {}
        });
    });
};

//[POST] /posts/autoInsert -- Auto insert post from Data Fake
const insertPosts = (req, res) => {
    const { idOwner } = req.body;
    const newData = DataPost.map(({ id, created_at, ...posts }) => {
        posts.owner = idOwner;
        return posts;
    });
    Post.insertMany(newData).then(posts => {
        res.status(200).json({
            status: 'success',
            message: 'Insert post successfully',
            data: posts
        });
    }).catch(err => {
        res.status(400).json({
            status: 'error',
            message: err,
            data: {}
        });
    });
};

module.exports = {
    getPosts,
    getPostsAndPaginate,
    getPostById,
    getCommentsInPost,
    insertPosts,
    searchPosts,
    createPost
};