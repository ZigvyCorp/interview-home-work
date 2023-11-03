import { API } from "../utils/API"
import commentModel from "../models/comment.model"
import config from "../configs/backend.cfg"

class CommentService {
    static getCommentService = async () => {
        const comments = await commentModel.find()
        return comments
    }

    static getCommentByPostId = async (postId) => {
        const comment = await commentModel.find({ post: postId })
        return comment
    }

    static createComment = async (comment) => {
        const newComment = await commentModel.create(comment)
        return newComment
    }

    static updateComment = async (commentId, comment) => {
        const updatedComment = await commentModel.findByIdAndUpdate(commentId, comment, { new: true })
        return updatedComment
    }
}

export default CommentService