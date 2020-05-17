var express = require('express');
var Comment = require('./comment/comment');
var Post = require('./post/post');
var User = require('./user/user');

const router = express.Router();

router.use('/main/comment', Comment);
router.use('/main/post', Post);
router.use('/main/user', User);

module.exports = router;