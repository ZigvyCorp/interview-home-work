const Comments = require("../models/commentsModel");
const makeResponse = require("../ultils/makeResponse");
const PAGE_SIZE = 5;
// getall
const getComments = async (req, res) => {

    if (req.query.postId) {
        getCommentsByPostId(req.query.postId, req.query.page, res);
    } else {
        try {
            const comments = await Comments.find();
            res.status(200).json(makeResponse("success", comments, 200));
        } catch (error) {
            res.status(200).json(makeResponse(error.message, null, 500));
        }
    }
}


// get by id
const getCommentsByPostId = async (postId, page, res) => {
    try {

        const offset = (Number(page || 1) - 1) * PAGE_SIZE;
        const comments = await Comments.aggregate([

            {
                $match: {
                    post: Number(postId)
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "owner",
                    foreignField: "id",
                    as: "users"
                }
            },
            {
                $unwind: "$users"
            },
            {
                $project: {
                    _id: 0,
                    id: 1,
                    content: 1,
                    created_at: 1,
                    userName: '$users.name'
                }
            },
            {
                $skip: offset
            },
            {
                $limit: PAGE_SIZE
            }
        ]);
        if (comments) {
            res.status(200).json(makeResponse("success", comments, 200));
        } else {
            res.status(200).json(makeResponse("Post not found", [], 404))
        }

    } catch (error) {
        res.status(200).json(makeResponse(error.message, null, 500));
    }
}


module.exports = {
    getCommentsByPostId,
    getComments,

}
