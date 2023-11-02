const asyncHandler = require("express-async-handler");
const Post = require("../models/postSchema");
const User = require("../models/userSchema");

const createPost = asyncHandler(async (req, res) => {
  try {
    const userId = req.body.userId;
    const title = req.body.title;
    const body = req.body.body;
    const user = await User.findOne({id: userId});
  
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    else {
      const post = {
        title: title,
        body: body,
        userId: user.id,
        author: user.name,
      }

      const newPost = await Post.create(post);
      res.status(200).json(newPost);
    }

  } catch (error) {
    return res.status(500).json("server error");
  }
});

const getAllPost = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

const deletePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const deletePost = await Product.findOneAndDelete(id, req.body, {
      new: true,
    });
    res.json(deletePost);
  } catch (error) {
    throw new Error(error);
  }
});

const updatePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (user) {
      const updatePost = await Post.findOneAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatePost);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const searchBlog = async (req, res) => {
  const { keyword } = req.query;

  try {
    const regex = new RegExp(keyword, "i"); // Tạo một biểu thức chính quy không phân biệt chữ hoa chữ thường

    const posts = await Post.find({
      $or: [
        { title: regex }, // Tìm kiếm theo tiêu đề
      ],
    });

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error server" });
  }
};

module.exports = {
  searchBlog,
  createPost,
  getAllPost,
  deletePost,
  updatePost,
};
