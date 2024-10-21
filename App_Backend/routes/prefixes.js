const express = require('express');
const userRoutes = require('./user'); 
const postRoutes = require('./post'); 
const commentRoutes = require('./comment'); 

const router = express.Router();

router.use('/users', userRoutes);

router.use('/posts', postRoutes);

router.use('/comments', commentRoutes);

module.exports = router;
