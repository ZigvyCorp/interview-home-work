const catchAsync = require('../utils/catchAsync');
const PostModel = require('../models/post.model');
const CommentModel = require('../models/comment.model');

const mongoose = require('mongoose');

const getPosts = catchAsync(async (req, res) => {
    const skip = parseInt(req.query.skip) || 0
    const limit = parseInt(req.query.limit) || 10
    const search = req.query.search || ''

    const matchCondition = {}

    if (search) {
        matchCondition.title = {
            $regex: search,
            $options: 'i'
        }
    }

    const posts = await PostModel.aggregate([
        { $match: matchCondition },
        { $skip: skip },
        { $limit: limit + 1 },
        {
            $lookup: {
                from: 'users',
                localField: 'owner',
                foreignField: '_id',
                as: 'owner'
            }
        },
        { $unwind: "$owner" },
        {
            // lookup pipline comments count
            $lookup: {
                from: 'comments',
                let: { postId: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$post", "$$postId"] } } },
                    { $count: "total" }
                ],
                as: 'commentsCount'
            }
        },
        {
            $unwind: {
                path: "$commentsCount",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $set: {
                commentsCount: {
                    $ifNull: ["$commentsCount.total", 0]
                }
            }
        },
        {
            $project: {
                owner: {
                    _id: 1,
                    name: 1,
                },
                title: 1,
                content: { $substr: ["$content", 0, 120] },
                tags: 1,
                created_at: 1,
                commentsCount: 1
            }
        }
    ])

    await new Promise(resolve => setTimeout(resolve, 1000))

    res.send({
        data: posts.slice(0, limit),
        hasNext: posts.length > limit,
        skip,
        limit
    })
});

const getPost = catchAsync(async (req, res) => {
    const id = req.params.id
    const limitComment = 3
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: 'Invalid id' })
    }

    const post = await PostModel.findById(id).populate('owner', '_id name').lean()
    if (!post) {
        return res.status(404).json({ error: 'Post not found' })
    }
    const comments = await CommentModel.find({ post: id }).limit(limitComment + 1).populate('owner', '_id name').lean()
    Object.assign(post, { comments: comments.slice(0, limitComment), hasNextComment: comments.length > limitComment })

    res.json(post)
})

module.exports = {
    getPosts,
    getPost
};