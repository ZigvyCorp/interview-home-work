var express = require('express');
var router = express.Router();
const { jwt } = require('../app/Users');
const { createComment, updateComment, deleteComment, CommentDetails, listComments } = require('../app/Comments');
const errorHandler = require('../utils/APIError');

const methodNotAllowed = (req, res, next) => {
  res
    .status(405)
    .send(
      errorHandler.APIErrors(
        errorHandler.APIError('Method is not allowed.', 405)
      )
    );
};

router
  .route('/create')
  .post(jwt, createComment)
  .all(methodNotAllowed);

router
  .route('/update')
  .put(jwt, updateComment)
  .all(methodNotAllowed);  

router
  .route('/delete')
  .delete(jwt, deleteComment)
  .all(methodNotAllowed); 

router
  .route('/detail')
  .get(commentDetails)
  .all(methodNotAllowed); 

router
  .route('/list')
  .get(listComments)
  .post(listComments)
  .all(methodNotAllowed); 

module.exports = router;
