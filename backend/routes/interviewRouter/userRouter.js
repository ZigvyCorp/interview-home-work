const express = require('express');
const userController = require('../../controllers/interviewController/userController');

const router = express.Router({ mergeParams: true }); //! chỉ định merge để sử dụng được tourId trên params

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
