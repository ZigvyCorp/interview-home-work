const { Posts } = require("../models");
const { Comments } = require("../models");

const postsController = {
  //add post
  addPost: async (req, res) => {
    const { owner, title, content, tags } = req.body;

    if (!owner || !title || !content)
      return res
        .status(400)
        .json({ success: false, message: "Missing this post!" });

    try {
      const newPost = new Posts({
        owner,
        title,
        content,
        tags,
      });
      await newPost.save();

      res.status(200).json(newPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error" });
    }
  },

  //get all posts
  getAllPosts: async (req, res) => {
    try {
      res.status(200).json(await Posts.find());
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get post by id
  getPostById: async (req, res) => {
    const findP = await Posts.findById(req.params.postId);
    if (!findP) res.status(404).json({ message: "Post not found!" });
    res.status(200).json(findP);
  },

  //delete post & (cmt || cmts)
  deletePost: async (req, res) => {
    try {
      await Posts.deleteOne({ _id: req.params.postId }).then(
        console.log("Deleted post by id:", req.params.postId)
      );
      await Comments.deleteMany({ post: req.params.postId });
      res.status(200).json(await Posts.find());
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //update post
  updatePost: async (req, res) => {
    try {
      const { title, content, tags } = req.body;
      await Posts.findOneAndUpdate(
        { _id: req.params.postId },
        {
          title: title,
          content: content,
          tags: tags,
        },
        { new: true }
      );
      res.status(200).json(await Posts.find({ _id: req.params.postId }));
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = postsController;
