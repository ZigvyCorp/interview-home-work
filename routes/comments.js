const express = require('express');
const router = express.Router();
const commentController = require('../controllers/CommentController');


router.post('/add', commentController.add);
router.get('/getall/:post',commentController.getall);


module.exports = router;
