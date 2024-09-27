const Post = require('../models/post.model.js')
const {
    ERROR_CODE,
    SUCCESS_CODE,
    SUCCESS_MESSAGE,
} = require('../constants/code.constants.js')
const paginate = require('express-paginate');

const getPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const size = parseInt(req.query.size, 10) || 10;
        const skip = (page - 1) * size;
        const searchTerm = req.query.searchTerm || ''
        console.log(searchTerm)
        const [results, itemCount] = await Promise.all([
            Post.aggregate([
                {
                    $lookup: {
                        from: 'users',
                        localField: 'userId',
                        foreignField: 'id',
                        as: 'author'
                    }
                },
                {
                    $unwind: '$author'
                },
                {
                    $lookup: {
                        from: 'comments',
                        localField: 'id',
                        foreignField: 'postId',
                        as: 'comments'
                    }
                },
                {
                    $match: {
                        $or: [
                            { title: { $regex: searchTerm, $options: 'i' } },
                            { body: { $regex: searchTerm, $options: 'i' } },
                        ]
                    }
                },
                {
                    "$skip" : skip,
                },
                {
                    "$limit" : size,
                },
                {
                    $project: {
                        _id: 0,
                        id: 1,
                        title: 1,
                        body: 1,
                        author: {
                            id: 1,
                            name: 1,
                            email: 1,
                            username: 1,
                        },
                        comments: {
                            id: 1,
                            name: 1,
                            email: 1,
                            body: 1,
                            createdAt: 1,
                        },
                        createdAt: 1,
                    },
                },
            ]),
            Post.find({
                $or: [
                    { title: { $regex: searchTerm, $options: 'i' } },
                    { body: { $regex: searchTerm, $options: 'i' } },
                ]
            }).countDocuments()
        ])
        const pageCount = Math.ceil(itemCount / req.query.size)
        return res.status(200).json({
            success: true,
            data: results,
            message: SUCCESS_MESSAGE,
            code: SUCCESS_CODE,
            totalItems: itemCount,
            totalPage: pageCount,
            currentPage: page,
            hasMore: paginate.hasNextPages(req)(pageCount)
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message, code: ERROR_CODE })
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: 'id',
                    as: 'author'
                }
            },
            {
                $unwind: '$author'
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: 'id',
                    foreignField: 'postId',
                    as: 'comments'
                }
            },
            {
                $match: {
                    id: parseInt(req.params.id)
                }
            },
            {
                $project: {
                    _id: 0,
                    id: 1,
                    title: 1,
                    body: 1,
                    author: {
                        id: 1,
                        name: 1,
                        email: 1,
                        username: 1,
                    },
                    comments: {
                        id: 1,
                        name: 1,
                        email: 1,
                        body: 1,
                        createdAt: 1,
                    },
                    createdAt: 1,
                }
            }
        ])
        return res.status(200).json({ success: true, data: post[0], message: SUCCESS_MESSAGE, code: SUCCESS_CODE })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message, code: ERROR_CODE })
    }
}

module.exports = {
    getPosts,
    getPost
}