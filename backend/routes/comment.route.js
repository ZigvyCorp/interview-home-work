const express = require("express");
const Router = express.Router();
const commentController = require('../controllers/comment.controller');

Router.get('/:id', commentController.getComments)




module.exports = Router