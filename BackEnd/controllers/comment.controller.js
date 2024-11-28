
import Comment from '../models/comments.model.js'

export const getCommentByPostId = async (req , res) => {
    try {
        const postId = req.params.postId
        
        const comments = await Comment.find({postId}).populate("userId")

        return res.status(200).json({
            comments
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error,
          });
    }
}