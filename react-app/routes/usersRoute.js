const express = require('express');
const router = express.Router();

const usersRoute = require('../controllers/usersControllers');
const postRoute = require('../controllers/postsControllers');

router.get('/user', usersRoute.userControllers);
router.get('/post', postRoute.userControllers);

module.exports = router;