const asyncHandler = require("express-async-handler");
const Post = require("../models/postSchema");
const User = require("../models/userSchema");

const createPost = asyncHandler(async (req, res) => {
  try {
    const userId = req.body.userId;
    const title = req.body.title;
    const body = req.body.body;
    const user = await User.findOne({ id: userId });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      const post = {
        title: title,
        body: body,
        userId: user.id,
        author: user.name,
      };

      const newPost = await Post.create(post);
      res.status(200).json(newPost);
    }
  } catch (error) {
    return res.status(500).json("server error");
  }
});

const getAllPost = asyncHandler(async (req, res) => {
  try {
    const title = req.query.title;
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;

    let query = {};

    if (title) {
      query.title = { $regex: title, $options: 'i' };
    }

    const posts = await Post.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);

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


const getPost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findOne({ id: id });
    res.status(200).json(post);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createPost,
  getAllPost,
  deletePost,
  updatePost,
  getPost
};
