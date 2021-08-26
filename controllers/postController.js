const Post = require('../models/postModel');
const crud = require('./utils/crud');

// CRUD
exports.createPost = crud.createOne(Post);
exports.getAllPosts = crud.getAll(Post, { path: 'author comments' });
exports.getPost = crud.getOne(Post, { path: 'author comments' });
exports.updatePost = crud.updateOne(Post);
exports.deletePost = crud.deleteOne(Post);
