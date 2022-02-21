const express = require('express');
const commentController = require('../controllers/commentController')
const router = express.Router();
router.get("/", commentController.getComments)
module.exports = router;