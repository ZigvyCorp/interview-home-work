const Post = require("../models/Posts");
const Comment = require("../models/Comments");
// GET BY PAGINATION
// api/posts?page=1&pageSize=10
exports.getPosts = async (req, res) => {
  try {
    const { page, pageSize } = req.query;
    const skip = (page - 1) * pageSize;
    const posts = await Post.find()
      .populate("owner")
      .skip(skip)
      .limit(pageSize);
    if (!posts) {
      return res.status(404).json({ message: "Can not find posts" });
    }
    const total = await Post.countDocuments();
    // Response
    res.status(200).json({ posts, total, currentPage: page });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET BY ID
// api/posts/:id
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Can not find post" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST
// api/posts
exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT
// api/posts/:id
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ message: "Can not find post" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Can not find post" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
