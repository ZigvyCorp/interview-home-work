const express = require('express');
const postRouter = express.Router();
const { getPost, detailPost, upPost, deletePost, sharePage } = require('../controller/post/index.js')
postRouter.get('/getPost', getPost);
postRouter.get("/detailPost/:id", detailPost);
postRouter.post("/upPost", upPost);
postRouter.delete("/deletePost/:id", deletePost);
postRouter.get('/getpaging/:page', sharePage);

module.exports = postRouter;
