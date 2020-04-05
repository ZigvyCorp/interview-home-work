const {authenticateJWT} = require('../middleware/index')
const userController = require('../controller/user.controller');
const postController = require('../controller/post.controller')
const express = require('express');
const router = express.Router();;

router.use(function(req,res,next){
    console.log('Time', Date.now());
    next();
})

router.post('/user/v1/authenticate',userController.authenticate);

router.post('/user/v1/register',userController.register);

router.post('/post/v1/add',postController.addPost)

router.get('/post/v1/getallpost',postController.getAllPost)

router.get('/post/v1/getbykeyword',postController.getByKeyWord)

module.exports = router;
