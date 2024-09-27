const Comment = require('../models/commentModel');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('owner').populate('post');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createComment = async (req, res) => {
  const comment = new Comment(req.body);
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add more methods as needed