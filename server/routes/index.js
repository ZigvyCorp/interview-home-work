const express = require('express');
const router = express.Router();

const postRouter = require('./post');
const userRouter = require('./user');
const commentRouter = require('./comment');

router.use('/posts',postRouter);
router.use('/users',userRouter);
router.use('/comments',commentRouter);

router.get('/',(req,res)=>{
    res.send('Welcome to my test');
});


module.exports = router;