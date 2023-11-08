const express = require('express');
const postRoutes = require('./post/routes');
const commentRoutes = require('./comment/routes');
const userRoutes = require('./user/routes');

const router = express.Router();

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;