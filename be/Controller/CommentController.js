const Comment = require("../Model/Comment");
const Post = require("../Model/Post");
const User = require("../Model/User");
const { generateId } = require("../Util/helpers");

const CommentController = {
  //get list
  getList: async (req, res) => {
    try {
      const comments = await Comment.find()
      .populate("ownerDetail")
      .sort({ createdAt: -1 })
      .then((comments) =>
          comments.map((comment) => ({
            ...comment._doc,
            ownerDetail: comment.ownerDetail[0],
          }))
        );

      res.status(200).send(comments);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  //delete
  delete: async (req, res) => {
    try {
      const findComment = await Comment.findOne({ id: req.params.id });
      if (!findComment)
        return res.status(404).send({ message: "Not found comment." });
      await findComment.deleteOne();
      res.status(200).send({ message: "Delete comment successfully." });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  //create
  create: async (req, res) => {
    try {
      const user = await User.findOne({ id: req.body.owner });
      if (!user) {
        return res.status(404).send({ message: "Not found user." });
      }
      const post = await Post.findOne({ id: req.body.post });
      if (!post) {
        return res.status(404).send({ message: "Not found post." });
      }
      const newComment = new Comment({ ...req.body, id: generateId() });
      await newComment.save();
      res.status(200).send({ message: "Create comment successful." });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  edit: async (req, res) => {
    try {
      const findComment = await Comment.findOne({ id: req.params.id });
      if (!findComment)
        return res.status(404).send({ message: "Not found comment." });
      await findComment.updateOne({
        $set: req.body,
      });

      res.status(200).send({ message: "Update comment successful." });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getById: async (req, res) => {
    try {
      const comment = await Comment.findOne({ id: req.params.id });
      if (!comment)
        return res.status(404).send({ message: "Not found comment." });
      res.status(200).send({ comment });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getByPost: async (req, res) => {
    try {
      const comments = await Comment.find({ post: req.params.id });
      res.status(200).send({ comments });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = CommentController;
