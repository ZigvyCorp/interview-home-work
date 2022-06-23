const Post = require('../models/Post');
const Comment = require('../models/Comment');

const getPosts = (req, res) => {
    Post.find({}).then(posts => {
        res.status(200).json({
            status: 'success',
            message: 'Get list of posts successfully',
            data:posts
        });
    });
};

const getPostsAndPaginate = (req, res) => {
    const { page = 1, pagesize = 10 } = res.queryParams;
    Post.find({})
        .skip((page * 1) - pagesize)
        .limit(pagesize)
        .then(posts => {
            res.status(200).json({
                status: 'success',
                message: 'Get list of posts and paginate successfully',
                data:posts,
            });
        });

};
const getPostById = (req, res) => {
    const { id } = req.params;
    Post.find({ _id: id }).then(posts => {
        res.status(200).json({
            status: 'success',
            message: 'Get post by id successfully',
            data:posts,
        });
    });
};

const getCommentsInPost = (req, res) => {
    const { id } = req.params;
    Comment.find({[post._id] : id}).then(comments=>{
        res.status(200).json({
            status:'success',
            message:'Get comments in post successfully',
            data:comments
        })
    })
};

module.exports = {
    getPosts,
    getPostsAndPaginate,
    getPostById,
    getCommentsInPost
};