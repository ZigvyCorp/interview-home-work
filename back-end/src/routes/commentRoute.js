const express = require('express');
const router = express.Router();
const {getAllComments, getCommentsByPost} = require('../controllers/commentController');

router.get('/', getAllComments);
router.get('/c', getCommentsByPost);

module.exports = router;
