const router = require('express').Router();
import { CommentController } from '../controllers';

router.get('', CommentController.getComments);

router.post('', CommentController.addComment);

export default router;