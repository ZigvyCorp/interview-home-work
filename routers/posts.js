const express = require('express'); 
const postsControllers = require('../controllers/posts');


const router = express.Router();
router.post('/',postsControllers.createPost);
router.put('/update',postsControllers.updatePost);
router.delete('/:id',postsControllers.deletePost);
router.get('/:id/comments',postsControllers.getComments);

router.get('/:id',postsControllers.getPost);
router.get('/',postsControllers.getPosts);

module.exports = router;