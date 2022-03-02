const express = require('express');
const controller = require('../controllers/Users.controller');

const router = express.Router();

router.get('/',controller.getAllUsers);

module.exports = router;