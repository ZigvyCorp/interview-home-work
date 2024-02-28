const CommentController = require('../Controller/CommentController');

const CommentRoute = require('express').Router();

CommentRoute.get('/', CommentController.getList);
CommentRoute.post('/create', CommentController.create);
CommentRoute.delete('/:id',  CommentController.delete);
CommentRoute.patch('/update/:id',  CommentController.edit);
CommentRoute.get('/:id',  CommentController.getById);
CommentRoute.get('/get-by-post/:id',  CommentController.getByPost);

module.exports = CommentRoute;