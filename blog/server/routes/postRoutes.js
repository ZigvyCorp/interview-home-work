const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get("/", postController.getAllPost)
router.get("/:id", postController.getPostWithID)
module.exports = router;