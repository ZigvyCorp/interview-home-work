const asyncHandler = require("express-async-handler");
const Post = require("../models/post");

const getAllPosts = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Trang hiện tại
    const pageSize = parseInt(req.query.pageSize) || 3; // Số lượng mục trên mỗi trang

    // get total count posts
    const totalCount = await Post.countDocuments();

    // calculate total pages
    const totalPages = Math.ceil(totalCount / pageSize);

    // handle pagination
    const skip = (page - 1) * pageSize; // number of posts are passed
    let posts = await Post.find().skip(skip).limit(pageSize).populate({
      path: "owner",
      select: "username", // only get username
    });

    // get 100 first characters of posts
    posts = posts.map((post) => ({
      ...post.toJSON(),
      content: post.content.substring(0, 100),
    }));

    return res.status(200).json({
      success: true,
      mes: "get all posts successfully",
      data: { posts, totalPages },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, mes: error.message, data: [] });
  }
});

const getPostById = asyncHandler(async (req, res) => {
  try {
    const { bid } = req.params;
    const posts = await Post.findById(bid).populate({
      path: "owner",
      select: "username", // only get username
    });

    return res.status(200).json({
      success: true,
      mes: "get all posts successfully",
      data: posts,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, mes: "get all posts failed", data: [] });
  }
});

const getPostByTitle = asyncHandler(async (req, res) => {
  try {
    const { title } = req.query;

    let posts = await Post.find({
      title: { $regex: title, $options: "i" },
    }).populate({
      path: "owner",
      select: "username", // only get username
    });

    posts = posts.map((post) => ({
      ...post.toJSON(),
      content: post.content.substring(0, 25),
    }));

    return res.status(200).json({
      success: true,
      message: "Get post by title successfully",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get post by title",
      error: error.message,
    });
  }
});

module.exports = { getAllPosts, getPostById, getPostByTitle };
