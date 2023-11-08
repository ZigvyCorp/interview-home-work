const express =require('express');
const router = express.Router();
const CommentController = require('../../Controllers/Comment.controller')

router.post('/',CommentController.add);

router.get('/',CommentController.getList);

router.get('/:id',CommentController.getOne);

router.delete("/:id",CommentController.delete);

router.patch("/:id",CommentController.editComment);

router.put("/:id",CommentController.editComment);

module.exports =router;