const express = require('express');
const controller = require('../controllers/Comments.controller');

const router = express.Router();

router.get('/', controller.getComments);

module.exports = router;