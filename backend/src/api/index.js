const { Router } = require("express");
const postPath = require('./posts/posts.path');

const router = Router();

router
.use('/posts',postPath)
.use('*',(req,res,next) => {
    next({statusCode:404})
    
})
module.exports = { router };
