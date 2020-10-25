var express = require('express');
var router = express.Router();

const { getAllPosts, getPostById, addNewPost, updatePost, deletePost, findPosts } = require('../../controllers/api/post.controller');

// GET list posts and paging if have params limit & page
router.get('/', getAllPosts);

//GET find post by id
router.get('/:id', getPostById);

//POST add new Post
router.post('/', addNewPost);

//PATCh update post
router.patch('/:id', updatePost);

//DELETE product by ID
router.delete('/:id', deletePost);

module.exports = router;