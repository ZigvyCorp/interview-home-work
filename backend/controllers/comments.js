const Comment = require("../models/CommentModel");

exports.getCommentsByPostId = async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ post: postId }).populate(
      "owner",
      "name",
    );
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createComment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    } else {
      const comment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        content: req.body.content,
        owner: req.body.owner
      });
      await comment.save();
      res.status(200).json(comment);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    } else {
        const id = req.params.id;
        const comment = await Comment.find({ _id: id });
        if (!comment) {
          res
            .status(404)
            .json({ message: "Not found this comment you want to update" });
        }
        if (comment.owner !== req.userId) {
            comment.content = req.body.content;
          await comment.save();
          res.status(200).json(comment);
      }
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const id = req.params.id;
    const comment = await Comment.find({ _id: id });
    if (!comment) {
      res.status(404).json({ message: "Not found this post you want to delete" });
    } else {
      const result = await Comment.deleteOne(comment);
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
