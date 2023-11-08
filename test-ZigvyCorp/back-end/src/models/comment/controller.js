const Comment = require("./model");

exports.getAllComments = async (req, res) => {
  try {
    const commentsData = await Comment.find();
    res.json(commentsData);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getCommentById = async (req, res) => {
  const commentId = req.params.id;
  try {
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    console.error("Error fetching comment:", error);
    res.status(500).send("Internal Server Error");
  }
};
