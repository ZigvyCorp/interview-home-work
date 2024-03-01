const mongoose = require('mongoose');
const BlogModel = require('../Models/BlogModel');
const UserModel = require('../Models/UserModel');
const { verifyToken } = require('./AuthController');

async function createBlog(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }

  const { owner, title, content, tags } = req.body;

  if (!owner || !title || !content) {
    return res.status(400).json('Owner, title, and content are required');
  }

  try {
    const newBlog = new BlogModel({
      owner,
      title,
      content,
      tags: tags || [],
    });

    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json(error.message);
    }

    res.status(500).json(error.message);
  }
}

async function getBlog(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }
  const blogId = req.params.id;

  try {
    const blog = await BlogModel.findById(blogId);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function updateBlog(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }
  const blogId = req.params.id;
  const { userId } = req.body;

  try {
    const blog = await BlogModel.findById(blogId);

    if (blog.userId === userId) {
      await BlogModel.findByIdAndUpdate(blogId, req.body, { new: true });
      res.status(200).json('Update successfully');
    } else {
      res.status(403).json('Action forbidden');
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function deleteBlog(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }
  const blogId = req.params.id;
  const userId = req.params.userId;

  try {
    const blog = await BlogModel.findById(blogId);

    if (blog.userId === userId) {
      await BlogModel.findByIdAndDelete(blogId);
      res.status(200).json('Delete successfully');
    } else {
      res.status(403).json('Action forbidden');
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function countTotalBlogs() {
  try {
    const totalBlogs = await BlogModel.countDocuments({});
    return totalBlogs;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAll(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }

  const { q, page, limit } = req.query;
  console.log(req.query);
  const regex = new RegExp(q, 'i');
  let blogs;
  let total;

  try {
    if (q) {
      const pageNumber = parseInt(page) || 1;
      const limitNumber = parseInt(limit) || 10;

      blogs = await BlogModel.find({
        $or: [{ title: regex }],
      })
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber);

      total = await BlogModel.countDocuments({
        $or: [{ title: regex }],
      });
    } else {
      const pageNumber = parseInt(page) || 1;
      const limitNumber = parseInt(limit) || 10;

      blogs = await BlogModel.find({})
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber);

      total = await BlogModel.countDocuments();
    }

    res.status(200).json({
      blogs,
      total,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getAll,
};
