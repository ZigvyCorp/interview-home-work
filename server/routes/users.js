var express = require('express');
var router = express.Router();
const { signUp, signIn ,jwt, getInfo, getUserById, updateInfo } = require('../app/Users');
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
  .route('/signup')
  .post(signUp)
  .all(methodNotAllowed);

router
  .route('/signin')
  .post(signIn)
  .all(methodNotAllowed);

router
  .route('/info')
  .get(jwt, getInfo)
  .post(jwt, getInfo)
  .all(methodNotAllowed); 

router
  .route('/info_by_id')
  .get(jwt, getUserById)
  .all(methodNotAllowed); 
    
router
  .route('/update')
  .put(jwt, updateInfo)
  .all(methodNotAllowed);    

module.exports = router;
