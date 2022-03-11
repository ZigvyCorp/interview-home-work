import mongoose from 'mongoose';
import Post from '../models/post.js';
import User from '../models/user.js';

// Create new post
export function createPost (req, res) {
  const post = new Post({
    owner: req.body.owner,
    created_at: req.body.created_at,
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags
  });

  User.findOne({ _id: req.body.owner })
    .then((owner) => {
      if (!owner) {
        return res.status(400).send({ message: "User does not exist"});
      }
      else {
        post
        .save()
        .then((newPost) => {
          return res.status(201).json({
            message: 'Post has been created',
            Post: newPost,
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
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
  }
  


// Get all posts
export function getAllPost( req, res){
  Post.find()
    .select('_id owner created_at title content tags')
    .then((allPost) => {
      return res.status(200).json({
        Post: allPost,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}



// Get posts with keywords
export function getPostWithKeyword(req, res) {
  const keyword = req.params.keyword;
  Post.find({ title: { "$regex": keyword }})
    .select('_id owner created_at title content tags')
    .then((allPost) => {
      if (!allPost) {
        res.status(404).send({ message: "Cannot find post with keyword " + keyword });
      }
      else {
        return res.status(200).json({
          Post: allPost,
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



// Get single post
export function getSinglePost(req, res) {
  const id = req.params.id;
  Post.findById(id)
    .then((singlePost) => {
      if (!singlePost) {
        res.status(404).send({ message: "Cannot find post with id " + id });
      }
      else {
        res.status(200).json({
          Post: singlePost,
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



// Update post
export function updatePost(req, res) {
  const id = req.params.id;
  const updateObject = req.body;
  Post.findByIdAndUpdate(id, updateObject, { useFindAndModify: false })
    .then(currentPost => {
      if (!currentPost) {
        res.status(404).send({ message: "Cannot update post with id " + id });
      }
      else {
        res.status(200).json({
          message: 'Post has been updated',
          updatePost: updateObject,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.'
      });
    });
}



// Delete post
export function deletePost(req, res) {
  const id = req.params.id;
  Post.findByIdAndRemove(id)
    .then(currentPost => {
      if (!currentPost) {
        res.status(404).send({ message: "Cannot delete post with id " + id });
      }
      else {
        res.status(204).json({
          message: 'Post has been deleted'
        });
      }   
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Server error. Please try again.'
      });
    });
}
