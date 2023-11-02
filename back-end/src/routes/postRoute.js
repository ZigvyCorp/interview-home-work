const express = require('express');
const router = express.Router();
const {getAllPosts, getPostDetails, getPostComments} = require('../controllers/postController');

router.get('/', getAllPosts);
router.get('/:id', getPostDetails);
router.get('/:id/comments', getPostComments);

module.exports = router;
