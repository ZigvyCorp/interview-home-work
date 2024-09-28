const postService = require("../services/postService");

// Utility function to handle errors in a consistent way
const sendErrorResponse = (res, error) => {
  res.status(500).json({ message: error.message });
};

// Main Post Controller
const PostController = {
  getAllPosts: async (req, res) => {
    try {
      const { offset = 0, limit = 100, userId } = req.query;
      const posts = userId
        ? await postService.fetchPostsByUserIdAllPostByUserId(userId)
        : await postService.fetchAllPosts(parseInt(offset), parseInt(limit));
      res.status(200).json(posts);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  getPostById: async (req, res) => {
    try {
      const post = await postService.fetchPostById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  getPostComments: async (req, res) => {
    try {
      const comments = await postService.fetchPostComments(req.params.id);
      res.status(200).json(comments);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  createPost: async (req, res) => {
    try {
      const newPost = await postService.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  updatePost: async (req, res) => {
    try {
      const updatedPost = await postService.updatePost(req.params.id, req.body);
      res.status(200).json(updatedPost);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  deletePost: async (req, res) => {
    try {
      await postService.deletePost(req.params.id);
      res.status(200).json({ message: "Post deleted" });
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },
};

module.exports = PostController;
