const express = require('express');
const commentController = require('../../models/comment/controller');

const router = express.Router();

router.get('/', commentController.getAllComments);

module.exports = router;
