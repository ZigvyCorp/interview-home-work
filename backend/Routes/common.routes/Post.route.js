const express =require('express');
const router = express.Router();
const PostController = require('../../Controllers/Post.controller')

router.post('/',PostController.add);

router.get('/',PostController.getList);

router.get('/:id',PostController.getOne);


router.delete("/:id",PostController.delete);

router.patch("/:id",PostController.editPost);

router.put("/:id",PostController.editPost);

module.exports =router;