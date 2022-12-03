const Comment = require("../models/CommentModel")
const newCommentValidator = require("../validators/comment/newCommentValidator")
const updateCommentValidator = require("../validators/comment/updateCommentValidator")

exports.getComments = async (req, res) =>{
    try {
        const comments = await Comment.find()
        res.status(200).json(comments)
    } catch(err) {
        res.status(500).json({ error: err })
    }
}

exports.getCommentById = async (req, res) =>{
    try {
        const id = req.params.id
        const comment = await Comment.find({_id: id})
        console.log('comment', comment)
        res.status(200).json(comment)
    } catch(err) {
        res.status(500).json({ error: err })
    }
}


exports.createComment = async (req, res) => {
    try {
        const newComment = req.body
        const comment = new Comment(newComment)
        await comment.save()
        res.status(200).json(comment)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

exports.updateComment = async (req, res) => {
    try {
        const id = req.params.id
        const comment = await findComment(id)
        if (!comment) {
            res.status(404).json({message: 'Not Found'})
        }else {
            const updatedComment = await Comment.updateOne(null, comment, {new: true})
            res.status(200).json(updatedComment)
        }
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

exports.deleteComment = async (req, res) => {
    try {
        const id = req.params.id
        const comment = await findComment(id)
        if (!comment) {
            res.status(404).json({message: 'Not Found'})
        }else {
            const deletedComment = await Comment.deleteOne(comment, {new: true})
            res.status(200).json(deletedComment)
        }
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


const findComment = async (id) => {
    const comment = await Comment.find({_id: id})
    return comment
}