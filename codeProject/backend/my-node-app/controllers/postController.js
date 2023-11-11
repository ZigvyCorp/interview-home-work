const Post = require("../models/Post");
const Comment = require("../models/Comment");
// Create a new post
exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name");

    // Tính số lượng bình luận cho mỗi bài đăng
    const postIDs = posts.map((post) => post._id); // Lấy danh sách các ID của bài đăng
    const commentCounts = await Comment.aggregate([
      {
        $match: { post: { $in: postIDs } }, // Chỉ lấy các bình luận có post ID trùng khớp với danh sách post IDs
      },
      {
        $group: {
          _id: "$post",
          count: { $sum: 1 }, // Tính tổng số lượng bình luận cho mỗi post ID
        },
      },
    ]);

    // Gán số lượng bình luận vào mỗi bài đăng
    posts.forEach((post) => {
      const commentCount = commentCounts.find((count) =>
        count._id.equals(post._id)
      );
      post.comment_count = commentCount ? commentCount.count : 0;
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "name");
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a post by ID
exports.updatePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a post by ID
exports.deletePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
