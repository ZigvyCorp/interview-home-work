const { getComments } = require('../controllers/comment.controller');

const router = require('express').Router();

router.get('/comments', getComments);

module.exports = router;