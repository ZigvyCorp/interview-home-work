const express = require('express');
const router = express.Router();
const {
  createPost,
  showPost,
  showSinglePost,
  deletePost,
  updatePost,
  addComment,
  addlike,
  removeLike,
} = require('../controllers/postController');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');

router.post('/post/create', isAuthenticated, isAdmin, createPost);
router.get('/post/show', showPost);
router.get('/post/:id', showSinglePost);
router.delete('/delete/post/:id', isAuthenticated, isAdmin, deletePost);
router.put('/update/post/:id', isAuthenticated, isAdmin, updatePost);
router.put('/comment/post/:id', isAuthenticated, addComment);
router.put('/addlike/post/:id', isAuthenticated, addlike);
router.put('/removelike/post/:id', isAuthenticated, removeLike);

module.exports = router;
