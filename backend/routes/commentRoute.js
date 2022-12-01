const express = require('express');
const router = express.Router()

const commentCtrl = require('../controllers/commentController')

router.post('/create',commentCtrl.createComment);
router.get('/',commentCtrl.getCommentByPostId);

module.exports = router;
