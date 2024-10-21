const express = require('express');
const { create, getAll, update, _delete ,getById, getByUserId, getByTags } = require('../controllers/post'); 
const { getAllByPost, createByPost } = require('../controllers/comment'); 
const { verifyToken } = require('../configs/jwt');
const router = express.Router();

//Post

router.post('/', verifyToken ,create);

router.get('/', getAll);

router.get('/tags', getByTags);

router.get('/user', getByUserId);

router.get('/:id', getById);

router.put('/:id', verifyToken , update);

router.delete('/:id',verifyToken ,_delete);

//Comment

router.get('/:id/comments', getAllByPost);

router.post('/:id/comments', verifyToken ,createByPost);


module.exports = router;