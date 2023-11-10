import { Comment } from "../model/CommentModel.js";
import { Post } from "../model/PostModel.js";

export const createComment = async (req, res) => {
    const { postId } = req.params
    const {
        user, content
    } = req.body
    if (user, postId, content) {
        const comment = new Comment({
            user: user,
            content: content,
            post: postId
        })
        await comment.save();
        const postRelated = await Post.findById(postId);
        postRelated.comment.push(comment);
        await postRelated.save()
        return res.status(200).json({
            message: "A New Comment"
        })
    } else {
        return res.json({
            status: 400,
            message: "Comment is not defined"
        })
    }
}


export const getComment = async (req, res) => {
    const findComment = await Comment.find();
    return res.status(200).json({
        content: findComment,
    });
}

export const updateComment = async (req, res) => {
    const { commentId } = req.params;
    const {
        content
    } = req.body
    const findComment = await Comment.findById(commentId);
    findComment.content = content;
    await findComment.save();
    if (findComment) {
        return res.status(200).json({
            message: "Updated successfully",
            content: findComment,
        })
    } else {
        return res.status(400).json({
            message: "The Comment is not defined",
        })
    }
}

export const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const detailComment = await Post.findByIdAndDelete(commentId)
    if (detailComment) {
        return res.status(200).json({
            message: "Comment is deleted",
        });
    } else {
        return res.status(400).json({
            message: "The Id Comment is require",
        });
    }
}