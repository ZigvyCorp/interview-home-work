const Post = require("../Model/Post");
const User = require("../Model/User");
const { generateId } = require("../Util/helpers");

const PostController = {
  //get list
  getList: async (req, res) => {
    try {
      const query = req.query;
      const offset = Number(query?.offset) || 0;
      const limit = Number(query?.limit) || 10;

      const posts = await Post.find()
        .populate("ownerDetail")
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit)
        .then((posts) =>
          posts.map((post) => ({
            ...post._doc,
            ownerDetail: post.ownerDetail[0],
          }))
        );

      const total = await Post.find().count();

      const pagination = {
        total,
        offset,
        limit,
      };

      res.status(200).send({ posts, pagination });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  //delete
  delete: async (req, res, next) => {
    try {
      const findPost = await Post.findOne({ id: req.params.id });
      if (!findPost)
        return res.status(404).send({ message: "Not found post." });
      await findPost.deleteOne();
      res.status(200).send({ message: "Delete post successfully." });
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
      const newPost = new Post({ ...req.body, id: generateId() });
      await newPost.save();
      res.status(200).send({ message: "Create post successful." });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  edit: async (req, res) => {
    try {
      const findPost = await Post.findOne({ id: req.params.id });
      if (!findPost)
        return res.status(404).send({ message: "Not found post." });
      await findPost.updateOne({
        $set: req.body,
      });

      res.status(200).send({ message: "Update post successful." });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getById: async (req, res) => {
    try {
      const post = await Post.findOne({ id: req.params.id });
      if (!post) return res.status(404).send({ message: "Not found post." });
      res.status(200).send({ post });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = PostController;
