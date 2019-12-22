const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const commentCtrl = require('./comment.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/comments - Get list of comments */
  .get(commentCtrl.list)

  /** POST /api/comments - Create new comment */
  .post(validate(paramValidation.createComment), commentCtrl.create);

router.route('/:commentId')
  /** GET /api/comments/:commentId - Get comment */
  .get(commentCtrl.get)

  /** PUT /api/comments/:commentId - Update comment */
  .put(validate(paramValidation.updateComment), commentCtrl.update)

  /** DELETE /api/comments/:commentId - Delete comment */
  .delete(commentCtrl.remove);

/** Load comment when API with commentId route parameter is hit */
router.param('commentId', commentCtrl.load);

module.exports = router;
