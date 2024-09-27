const express = require('express');
const { update, _delete  } = require('../controllers/comment'); 
const { verifyToken } = require('../configs/jwt');
const router = express.Router();

router.put('/:id', verifyToken , update);

router.delete('/:id',verifyToken ,_delete);

module.exports = router;