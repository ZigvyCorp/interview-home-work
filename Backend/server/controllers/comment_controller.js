import mongoose from 'mongoose';
import Comment from '../models/comment.js';

// create new comment
export function createComment (req, res) {
  const comment = new Comment({
    owner: req.body.owner,
    created_at: req.body.created_at,
    post: req.body.post,
    content: req.body.content,
  });
  
  return comment
    .save()
    .then((newComment) => {
      return res.status(201).json({
        message: 'Comment has been created',
        Comment: newComment,
      });
    })
    .catch((error) => {
        console.log(error);
      res.status(500).json({
        message: 'Cannot create comment',
        error: error.message,
      });
    });
  }
  
// Get all comments
export function getAllComment( req, res){
  Comment.find()
    .select('_id owner created_at post content')
    .then((allComment) => {
      return res.status(200).json({
        Comment: allComment,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}

// get comments with post id
export function getCommentWithPostID(req, res) {
  const id = req.params.id;
  Comment.find({ post: id })
    .select('_id owner created_at post content')
    .then((allComment) => {
      return res.status(200).json({
        Comment: allComment,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'No comment exists in this post',
        error: err.message,
      });
    });
}

// get single comment
export function getSingleComment(req, res) {
  const id = req.params.id;
  Comment.findById(id).exec()
    .then((singleComment) => {
      res.status(200).json({
        Comment: singleComment,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'This comment does not exist',
        error: err.message,
      });
   });
}

// update comment
export function updateComment(req, res) {
  const id = req.params.id;
  const updateObject = req.body;
  Comment.updateOne({ _id:id }, { $set:updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        message: 'Comment has been updated',
        updateComment: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Cannot update comment'
      });
    });
}

// delete comment
export function deletecomment(req, res) {
  const id = req.params.id;
  Comment.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(204).json({
        message: 'Comment has been deleted'
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Cannot delete comment'
      });
    });
}
