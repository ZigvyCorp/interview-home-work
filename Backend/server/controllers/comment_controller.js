import mongoose from 'mongoose';
import Comment from '../models/comment.js';
import User from '../models/user.js';
import Post from '../models/post.js';

// Create new comment
export function createComment (req, res) {
  const comment = new Comment({
    owner: req.body.owner,
    created_at: req.body.created_at,
    post: req.body.post,
    content: req.body.content,
  });

  Post.findOne({ _id: req.body.post })
    .then((currentPost) => {
      if (!currentPost) {
        return res.status(400).send({ message: "Post does not exist"});
      }
      else {
        User.findOne({ _id: req.body.owner })
          .then((owner) => {
            if (!owner) {
              return res.status(400).send({ message: "User does not exist"});
            }
            else {
              comment
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
                message: 'Server error. Please try again.',
                error: error.message,
              });
            });
          }
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
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



// Get comments with post id
export function getCommentWithPostID(req, res) {
  const id = req.params.id;
  Comment.find({ post: id })
    .select('_id owner created_at post content')
    .then((allComment) => {
      if (!allComment) {
        res.status(404).send({ message: "Post does not exist or there is no comment" });
      }
      else {
        return res.status(200).json({
          Comment: allComment,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}



// Get single comment
export function getSingleComment(req, res) {
  const id = req.params.id;
  Comment.findById(id)
    .then((singleComment) => {
      if (!singleComment) {
        res.status(404).send({ message: "Cannot find comment with id " + id });
      }
      else {
        res.status(200).json({
          Comment: singleComment,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
      });
   });
}



// Update comment
export function updateComment(req, res) {
  const id = req.params.id;
  const updateObject = req.body;
  Comment.findByIdAndUpdate(id, updateObject, { useFindAndModify: false })
    .then(currentComment => {
      if (!currentComment) {
        res.status(404).send({ message: "Cannot update comment with id " + id });
      }
      else {
        res.status(200).json({
          message: 'Comment has been updated',
          updateComment: updateObject,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.'
      });
    });
}



// Delete comment
export function deleteComment(req, res) {
  const id = req.params.id;
  Comment.findByIdAndRemove(id)
    .then(currentComment => {
      if (!currentComment) {
        res.status(404).send({ message: "Cannot delete comment with id " + id });
      }
      else {
        res.status(204).json({
          message: 'Comment has been deleted'
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.'
      });
    });
}
