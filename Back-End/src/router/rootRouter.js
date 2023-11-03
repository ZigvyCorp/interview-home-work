const express = require('express');
const rootRouter = express.Router();
const postRouter = require('./postRouter');
rootRouter.use("/post",postRouter);
module.exports=rootRouter;