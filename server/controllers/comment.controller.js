import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import Comment from "../models/comment.model.js";

export const createComment = async (req, res) => {
    try {
        const { postId, body, userId } = req.body;

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(400).json({ error: "Post not found" });
        }

        const comment = await Comment.create({
            postId,
            author: user.username,
            body,
        });

        post.comments.push(comment._id);
        await post.save();

        return res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
