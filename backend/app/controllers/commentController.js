import Comment from '../models/commentModel.js';

class CommentController {
    // Get all comments 
    static async getComments(req, res) {
        try {
            const comments = await Comment.getAllComments();
            if (!comments.length) {
                return res.status(404).json({ message: 'No comments found' });
            }
            return res.json(comments);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Get comments by post ID 
    static async getCommentsByPostId(req, res) {
        try {
            const comments = await Comment.getCommentsByPostId(req.params.postId);
            if (!comments.length) {
                return res.status(404).json({ message: 'No comments found for this post' });
            }
            return res.json(comments);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Create a new comment  
    static async createComment(req, res) {
        try {
            const newComment = await Comment.createComment(req.body);
            return res.status(201).json(newComment);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Update an existing comment   
    static async updateComment(req, res) {
        try {
            const updatedComment = await Comment.updateComment(req.params.id, req.body);
            if (!updatedComment) {
                return res.status(404).json({ message: 'Comment not found' });
            }
            return res.json(updatedComment);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Delete a comment    
    static async deleteComment(req, res) {
        try {
            const deletedComment = await Comment.deleteComment(req.params.id);
            if (!deletedComment) {
                return res.status(404).json({ message: 'Comment not found' });
            }
            return res.json(deletedComment);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}

export default CommentController;