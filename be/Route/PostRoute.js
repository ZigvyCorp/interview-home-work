const PostController = require('../Controller/PostController');

const PostRoute = require('express').Router();

PostRoute.get('/', PostController.getList);
PostRoute.post('/create', PostController.create);
PostRoute.delete('/:id',  PostController.delete);
PostRoute.patch('/update/:id',  PostController.edit);
PostRoute.get('/:id',  PostController.getById);

module.exports = PostRoute;