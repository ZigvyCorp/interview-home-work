import mongoose from 'mongoose';
import Post from '../models/post.js';

// create new post
export function createPost (req, res) {
  const post = new Post({
    owner: req.body.owner,
    created_at: req.body.created_at,
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags
  });
  
  return post
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
        message: 'Cannot create post',
        error: error.message,
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

// get posts with keywords
export function getPostWithKeyword(req, res) {
  const keyword = req.params.keyword;
  Post.find({ title: { "$regex": keyword }})
    .select('_id owner created_at title content tags')
    .then((allPost) => {
      return res.status(200).json({
        Post: allPost,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'No post with this keyword exists',
        error: err.message,
      });
    });
}

// get single post
export function getSinglePost(req, res) {
  const id = req.params.id;
  Post.findById(id).exec()
    .then((singlePost) => {
      res.status(200).json({
        Post: singlePost,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'This post does not exist',
        error: err.message,
      });
   });
}

// update post
export function updatePost(req, res) {
  const id = req.params.id;
  const updateObject = req.body;
  Post.updateOne({ _id:id }, { $set:updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        message: 'Post has been updated',
        updatePost: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Cannot update post'
      });
    });
}

// delete post
export function deletePost(req, res) {
  const id = req.params.id;
  Post.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(204).json({
        message: 'Post has been deleted'
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Cannot delete post'
      });
    });
}
