const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/meController');

// me/stored/posts
router.get('/stored/posts', meController.storedPosts);
router.get('/trash/posts', meController.trashPosts);


module.exports = router;
