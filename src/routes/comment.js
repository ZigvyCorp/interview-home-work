const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!


// a simple test url to check that all of our files are communicating correctly.
router.get('', commentController.findAllComment);
router.get('/comments', commentController.findAllCommentByPostId);
router.post('/create', commentController.createComment);
module.exports = router;
