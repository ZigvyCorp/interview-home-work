const express = require('express');
const asyncHandler = require('../../helpers/asyncHandler');
const UserController = require('../../controllers/user.controller');
const router = express.Router();

router.delete('/:id', asyncHandler(UserController.removeUser));
router.get('/:id', asyncHandler(UserController.getUserById));
router.get('/', asyncHandler(UserController.getAllUsers));
router.post('/', asyncHandler(UserController.createNewUser));

module.exports = router;