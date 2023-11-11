const express = require("express");
const Router = express.Router();
const commentController = require('../controllers/comment.controller');

Router.get('/:id', commentController.getComments)

Router.post('/', commentController.addComment)


module.exports = Router