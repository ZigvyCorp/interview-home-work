var express = require('express');
var router = express.Router();
const { jwt } = require('../app/Users');
const { createPost, updatePost, deletePost, postDetails, listPosts } = require('../app/Posts');
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
  .post(jwt, createPost)
  .all(methodNotAllowed);

router
  .route('/update')
  .put(jwt, updatePost)
  .all(methodNotAllowed);  

router
  .route('/delete')
  .delete(jwt, deletePost)
  .all(methodNotAllowed); 

router
  .route('/detail')
  .get(postDetails)
  .all(methodNotAllowed); 

router
  .route('/list')
  .get(listPosts)
  .post(listPosts)
  .all(methodNotAllowed); 

module.exports = router;
