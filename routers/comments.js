const express = require('express'); 
const commentsControllers = require('../controllers/comments');


const router = express.Router();
router.post('/',commentsControllers.createComment);
router.put('/update',commentsControllers.updateComment);
router.delete('/:id',commentsControllers.deleteComment);

router.get('/',commentsControllers.getComments);

module.exports = router;