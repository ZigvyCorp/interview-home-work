import { Router } from 'express';

import * as CommentController from '../controllers/comment.controller';

const router = new Router();

router.route('/comments').get(CommentController.getComments);

// post a comment
router.route('/:_id/comment').post(CommentController.addComment);


export default router;
