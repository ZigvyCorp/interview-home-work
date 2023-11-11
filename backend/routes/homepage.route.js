const express = require("express");
const Router = express.Router();
const blogController = require('../controllers/blog.controller');

Router.get('/', blogController.getBlogs)

Router.post('/', blogController.addBlog)


module.exports = Router