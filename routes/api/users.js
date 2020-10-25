var express = require('express');
var router = express.Router();

const { getAllUsers, register, login } = require('../../controllers/api/user.controller');
// GET list users
router.get('/', getAllUsers);

// Register
router.post('/', register);

//Login
router.post('/login', login);

module.exports = router;