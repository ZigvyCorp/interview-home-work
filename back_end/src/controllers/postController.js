const Post = require("../models/Post");

const postController = {
  //ADD POST
  addPost: async (req, res) => {
    try {
      const post = await new Post({
        owner: req.body.owner,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
      });
      const savedPost = await post.save();

      res.status(200).json(savedPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },

  //GET ALL POST
  getAllPosts: async (req, res) => {
    try {
      const { page = 1, size = 10 } = req.query;

      const skip = (page - 1) * size;
      const totalPosts = await Post.countDocuments();
      const posts = await Post.find()
        .sort({ created_at: -1 })
        .populate("owner", "name")
        .populate({
          path: "comments",
          populate: {
            path: "user",
            select: "name",
          },
        })
        .skip(skip)
        .limit(size);

      const totalPages = Math.ceil(totalPosts / size);

      res.status(200).json({
        posts,
        currentPage: page,
        totalPages,
        totalPosts,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },

  // GET BY ID
  getPostById: async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Post.findById(postId)
        .populate("owner", "name")
        .populate({
          path: "comments",
          populate: {
            path: "user",
            select: "name",
          },
        });

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
  // SEARCH POSTS
  searchPosts: async (req, res) => {
    try {
      const { keyword, page = 1, size = 10 } = req.query;
      const skip = (page - 1) * size;

      if (!keyword) {
        return res.status(400).json({ message: "Keyword is required" });
      }

      const totalPosts = await Post.countDocuments({
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { content: { $regex: keyword, $options: "i" } },
        ],
      });

      const posts = await Post.find({
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { content: { $regex: keyword, $options: "i" } },
          { "owner.name": { $regex: keyword, $options: "i" } },
        ],
      })
        .populate("owner", "name")
        .populate({
          path: "comments",
          populate: {
            path: "user",
            select: "name",
          },
        })
        .skip(skip)
        .limit(size);

      const totalPages = Math.ceil(totalPosts / size);

      res.status(200).json({
        posts,
        currentPage: parseInt(page),
        totalPages,
        totalPosts,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
};
module.exports = postController;
