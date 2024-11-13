const commentService = require("../services/commentService");

const sendErrorResponse = (res, error) => {
  res.status(500).json({ error: error.message });
};

const CommentController = {
  getAllComments: async (req, res) => {
    try {
      const { postId, offset = 0, limit = 100 } = req.query;
      const comments = postId
        ? await commentService.fetchCommentsByPostId(postId)
        : await commentService.fetchAllComments(parseInt(offset), parseInt(limit));
      res.status(200).json(comments);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  getCommentById: async (req, res) => {
    try {
      const comment = await commentService.fetchCommentById(req.params.id);
      res.status(200).json(comment);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  createComment: async (req, res) => {
    try {
      const newComment = await commentService.createComment(req.body);
      res.status(201).json(newComment);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  updateComment: async (req, res) => {
    try {
      const updatedComment = await commentService.updateComment(req.params.id, req.body);
      res.status(200).json(updatedComment);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  deleteComment: async (req, res) => {
    try {
      await commentService.deleteComment(req.params.id);
      res.status(200).json({ message: "Comment deleted" });
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },
};

module.exports = CommentController;
