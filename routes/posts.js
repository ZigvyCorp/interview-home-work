const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');


router.post('/add', postController.add);
router.get('/getall',postController.getAll);
router.get('/getpost/:id',postController.getPost)

module.exports = router;
