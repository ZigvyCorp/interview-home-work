const postService = require("../services/postService");

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const { offset, limit } = req.query;
    const userId = req.query.userId;
    const posts = userId
      ? await postService.getAllPostByUserId(userId)
      : await postService.getAllPosts(
          parseInt(offset) || 0,
          parseInt(limit) || 100
        );
    
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get comments for a specific post by post ID
exports.getPostComments = async (req, res) => {
  try {
    const comments = await postService.getPostComments(req.params.id);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new post
exports.createPost = async (req, res) => {
  try {
    const newPost = await postService.createPost(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update post by ID
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await postService.updatePost(req.params.id, req.body);
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete post by ID
exports.deletePost = async (req, res) => {
  try {
    await postService.deletePost(req.params.id);
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
