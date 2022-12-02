const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');

router.post('/create', UserController.createUser);
router.get('/', UserController.getUsers);

module.exports = router;
