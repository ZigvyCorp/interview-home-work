import Blog from '../models/Blog.js';
import User from '../models/User.js';
import mongoose from 'mongoose';

export const getAllBlog = async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({title: 1}).populate('owner');
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  const {owner, title, content, tags} = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(owner);
  } catch (error) {
    next(error);
  }
  if(!existingUser) {
    return res.status(404).json({ message: 'User Not Found' });
  }
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const blog = await Blog({owner, title, content, tags}).save({session});
    existingUser.blogs.push(blog);
    await existingUser.save({session});
    await session.commitTransaction();
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  const {id} = req.params;
  const {owner, title, content, tags} = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(id, {owner, title, content, tags}, {new: true});
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  const {id} = req.params;
  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  };
};

export const deleteBlog = async (req, res, next) => {
  const {id} = req.params;
  try {
    const blog = await Blog.findOneAndDelete(id).populate('user');
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    res.status(200).json({message: "Blog deleted"});
  } catch (error) {
    next(error);
  }
}

export const getByUserId = async (req, res, next) => {
  const {id} = req.params;
  let userBlogs;
  try {
    userBlogs = await User.findById(id).populate('blog');
    res.status(200).json(userBlogs);
  } catch (error) {
    res.status(404).json({message: "User not found"});
  }
}