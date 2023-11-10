const express = require('express');
const commentsController = require('../controllers/comments-controller');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', commentsController.getAllComments);

module.exports = router;