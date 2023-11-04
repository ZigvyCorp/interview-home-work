const express = require('express');
const { searchPosts, getPost } = require('../controllers/post.controller');

const routes = express.Router();

routes.get('/:id', getPost);
routes.get('/', searchPosts);

module.exports = routes;
