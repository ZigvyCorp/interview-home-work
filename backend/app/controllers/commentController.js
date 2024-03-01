const mongoose = require('mongoose')
const status = require('../constants/constants')
const commentModel = require('../models/commentModel')

const notFoundComment = 'Not found any comment'

const getCommentsOfPost = async (req, res) => {
    const { postId, _start, _limit } = req.query
    try {
        if (postId && !mongoose.Types.ObjectId.isValid(postId)) {
            status.badRequestStatus(res, 'postId is invalid')
        }
        if (postId === undefined || postId === '') {
            const commentList = await commentModel.find().populate('owner')
            const condition = getConditions(_start, _limit, commentList)
            const result = commentList.slice(condition._start * condition._limit, (condition._start + 1) * condition._limit)
            status.successStatus(res, result, 'Get all comments of Post successfully', result.length)
        } else {
            const commentListOfPost = await commentModel.find({ post: postId }).populate('owner')
            const condition = getConditions(_start, _limit, commentListOfPost)
            const result = commentListOfPost.slice(condition._start * condition._limit, (condition._start + 1) * condition._limit)
            status.successStatus(res, result, 'Get all comments of Post successfully', result.length)
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const createComment = async (req, res) => {
    const {
        userId,
        postId,
        content,
        create_at
    } = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            status.badRequestStatus(res, 'postId is invalid')
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'userId is invalid')
        }
        if (!content) {
            status.badRequestStatus(res, 'name is unique required')
        }
        const newComment = {
            _id: new mongoose.Types.ObjectId(),
            owner: userId,
            post: postId,
            content,
            create_at
        }
        const createdComment = await commentModel.create(newComment)
        status.successCreateStatus(res, createdComment, 'Create new comment successfully')
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const updateCommentById = async (req, res) => {
    let commentId = req.params.commentId
    const {
        userId,
        content,
        create_at
    } = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            status.badRequestStatus(res, 'commentId is invalid')
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'userId is invalid')
        }
        const comment = await commentModel.findById(commentId)
        if (comment.owner !== userId) {
            status.badRequestStatus(res, 'Just only author of this comment can edit it!')
        } else {
            let updateComment = {
                content,
                create_at
            }
            const updatedComment = await commentModel.findByIdAndUpdate(commentId, updateComment)
            if (updateComment) {
                status.successStatus(res, updatedComment, 'Update comment by id successfully')
            } else {
                status.notFoundStatus(res, notFoundComment)
            }
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const deleteCommentById = async (req, res) => {
    let commentId = req.params.commentId
    let userId = req.params.userId
    try {
        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            status.badRequestStatus(res, 'commentId is invalid')
        }
        const comment = await commentModel.findById(commentId)
        if (!userId || comment.owner !== userId) {
            status.badRequestStatus(res, 'Just only author of this comment can edit it!')
        } else {
            const deletedComment = await commentModel.findByIdAndDelete(commentId)
            if (deletedComment) {
                status.successStatus(res, deletedComment, 'Delete comment by id successfully')
            } else {
                status.notFoundStatus(res, notFoundComment)
            }
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }

}

const getConditions = (_start, _limit, commentList) => {
    if (!_start) {
        _start = 0
    }
    if (!_limit) {
        _limit = commentList.length
    }
    if (_start || _limit) {
        parseInt(_start)
        parseInt(_limit)
    }
    return {
        _start,
        _limit
    }
}
module.exports = {
    createComment,
    updateCommentById,
    deleteCommentById,
    getCommentsOfPost
}