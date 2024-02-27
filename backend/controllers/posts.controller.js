const Comment = require("../models/comment.model");
const Post = require("../models/post.model");

// Get all posts: GET /api/v1/posts?page=1&limit=10
const getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    let query = {};

    if (keyword) {
      query = {
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { tags: { $in: [keyword.toLowerCase()] } },
        ],
      };
    }

    const posts = await Post.aggregate([
      {
        $match: query,
      },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "owner",
        },
      },
      {
        $unwind: "$owner",
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "post",
          as: "comments",
        },
      },
      {
        $addFields: {
          totalComment: { $size: "$comments" },
        },
      },
      {
        $project: {
          "owner.password": 0,
          "owner.__v": 0,
          "owner.createdAt": 0,
          "owner.updatedAt": 0,
          "owner.role": 0,
          comments: 0,
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $skip: skipIndex,
      },
      {
        $limit: limit,
      },
    ]);

    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a post by id: GET /api/v1/posts/:id
const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;

    const existPost = await Post.findById(postId);

    if (!existPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    const post = await Post.aggregate([
      {
        $match: query,
      },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "owner",
        },
      },
      {
        $unwind: "$owner",
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "post",
          as: "comments",
        },
      },
      {
        $addFields: {
          totalComment: { $size: "$comments" },
        },
      },
      {
        $project: {
          "owner.password": 0,
          "owner.__v": 0,
          "owner.createdAt": 0,
          "owner.updatedAt": 0,
          "owner.role": 0,
          comments: 0,
        },
      },
    ]);

    if (post.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post[0]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new post: POST /api/v1/posts
const createPost = async (req, res) => {
  try {
    const { owner, title, content, tags } = req.body;

    const lowerCaseTags = tags.map((tag) => tag.toLowerCase());

    const newPost = await Post.create({
      owner,
      title,
      content,
      tags: lowerCaseTags,
    });

    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a post by id: PATCH /api/v1/posts/:id
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, tags } = req.body;

    const existPost = await Post.findById(postId);

    if (!existPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (title) existPost.title = title;
    if (content) existPost.content = content;
    if (tags) {
      const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
      existPost.tags = lowerCaseTags;
    }

    await existPost.save();

    res
      .status(200)
      .json({ message: "Post updated successfully", post: existPost });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a post by id: DELETE /api/v1/posts/:id
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const existPost = await Post.findById(postId);
    if (!existPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    await existPost.remove();

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get comments by post id: GET GET /api/v1/posts/:id/comments?page=1&limit=10
const getCommentsByPostId = async (req, res) => {
  try {
    const postId = req.params.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    const comments = await Comment.find({ post: postId })
      .populate("owner", "username")
      .sort({ createdAt: -1 })
      .skip(skipIndex)
      .limit(limit);

    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getCommentsByPostId,
};
