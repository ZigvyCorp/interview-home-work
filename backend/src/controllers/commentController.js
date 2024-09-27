const commentService = require("../services/commentService");

// Get all comments
exports.getAllComments = async (req, res) => {
  try {
    const postId = req.query.postId;
    const { offset, limit } = req.query;
    const comments = postId
      ? await commentService.getCommentsByPostId(postId)
      : await commentService.getAllComments(
          parseInt(offset) || 0,
          parseInt(limit) || 100
        );
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get comment by ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await commentService.getCommentById(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new comment
exports.createComment = async (req, res) => {
  try {
    const newComment = await commentService.createComment(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update comment by ID
exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await commentService.updateComment(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete comment by ID
exports.deleteComment = async (req, res) => {
  try {
    await commentService.deleteComment(req.params.id);
    res.status(200).json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
