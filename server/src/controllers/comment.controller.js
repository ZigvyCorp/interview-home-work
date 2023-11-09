const catchAsync = require('../utils/catchAsync');
const CommentModel = require('../models/comment.model')

const mongoose = require('mongoose');

const getCommentsOfPost = catchAsync(async (req, res) => {
    const id = req.params.id

    const skip = parseInt(req.query.skip) || 0
    const limit = parseInt(req.query.limit) || 6

    const comments = await CommentModel.aggregate([
        {
            $match: { post: new mongoose.Types.ObjectId(id) }
        },
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
        {
            $unwind: "$owner"
        },
        {
            $project: {
                owner: {
                    _id: 1,
                    name: 1,
                },
                content: 1,
                created_at: 1,
            }
        }
    ])

    await new Promise(resolve => setTimeout(resolve, 1000))

    res.json({
        data: comments.slice(0, limit),
        hasNext: comments.length > limit,
    })

});

module.exports = {
    getCommentsOfPost,
};