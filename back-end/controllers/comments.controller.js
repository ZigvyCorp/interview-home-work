const CommentModel = require("../models/comments.model");

const listComment = async (req, res, next) => {
  try {
    const comments = await CommentModel.getListComment();

    res.send(comments.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listComment,
};
