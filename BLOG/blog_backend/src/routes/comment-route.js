const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment-controller');

router.route('/create-comment/:postId/:userId').post(commentController.create);
router.route('/read-comment/:userId').get(commentController.findByUserId);

module.exports = router;
