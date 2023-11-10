const Comment = require('../models/Comment')

const getAllCommentOfPost = async(req,res) => {
    try {
        const {post:postId} = req.params
        const commentsofPost = await Comment.find({
            post: postId
        })

        res.status(200).json({ 'commentsofPost': commentsofPost, 'count': commentsofPost.length })

    } catch (error) {
        res.status(500).json({ msg: error })
    }}

    const getAllComment = async(req,res) => {
        try {
            const comments = await Comment.find({})

            res.status(200).json(comments)

        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }
module.exports={
    getAllCommentOfPost,
    getAllComment
}