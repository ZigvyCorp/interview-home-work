'use strict';
const express = require('express');
const router = express.Router();

router.use('/v1/api/users', require('./user/index'));
router.use('/v1/api/posts', require('./post/index'));
router.use('/v1/api/comments', require('./comment/index'));

module.exports = router;
