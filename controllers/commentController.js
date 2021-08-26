const Comment = require('../models/commentModel');
const crud = require('./utils/crud');

// CRUD
exports.createComment = crud.createOne(Comment);
exports.getAllComments = crud.getAll(Comment, {
  path: 'author',
  select: 'name -_id -id',
});
exports.getComment = crud.getOne(Comment);
exports.updateComment = crud.updateOne(Comment);
exports.deleteComment = crud.deleteOne(Comment);

exports.setPostUserIds = (req, res, next) => {
  if (!req.body.postId) req.body.postId = req.params.postId;
  // if (!req.body.ownerId) req.body.ownerId = req.user.id;
  next();
};
