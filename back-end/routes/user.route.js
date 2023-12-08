var express = require('express');
const userController = require('../controllers/user.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.getUsers);

module.exports = router;
