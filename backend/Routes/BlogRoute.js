const express = require('express');
const {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getAll,
} = require('../Controllers/BlogController');

const router = express.Router();

router.post('/', createBlog);
router.get('/', getAll);
router.get('/:id', getBlog);
router.put('/:id', updateBlog);
router.delete('/:userId/:blogId', deleteBlog);

module.exports = router;
