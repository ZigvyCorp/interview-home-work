const EXPRESS = require('express');
const MULTER = require('multer');
var router = EXPRESS.Router();
var Response = require('../utils/response');

var defaultController = require('../controllers/default');
var userController = require('../controllers/user');
var postController = require('../controllers/post');
var commentController = require('../controllers/comment');

var isAuthenticated = require('../utils/isAuthenticated');

// DEFAULT CONTROLLERS
router.get('/', isAuthenticated, defaultController.sayHello);

// USER CONTROLLERS
router.get('/user', isAuthenticated, userController.retrieveAll);
router.get('/user/:id', isAuthenticated, userController.retrieveOne);
router.post('/user', userController.create);
router.put('/user/:id', isAuthenticated, userController.update);
router.delete('/user/:id', isAuthenticated, userController.delete);
router.post('/login', userController.login);

// POST CONTROLLERS
router.get('/post', postController.retrieveAll);
router.get('/post/:id', isAuthenticated, postController.retrieveOne);
router.post('/post', isAuthenticated, postController.create);
router.put('/post/:id', isAuthenticated, postController.update);
router.delete('/post/:id', isAuthenticated, postController.delete);

// COMMENT CONTROLLERS
router.get('/comment', commentController.retrieveAll);
router.get('/comment/:id', isAuthenticated, commentController.retrieveOne);
router.post('/comment', isAuthenticated, commentController.create);
router.put('/comment/:id', isAuthenticated, commentController.update);
router.delete('/comment/:id', isAuthenticated, commentController.delete);
router.get('/comment/post/:postID', commentController.countCommentBelongToPost);

// UNKOWN CONTROLLERS
router.all('/*', function(req, res) {
    res.send(Response.unknowRouter("Unknow route", null));
});

module.exports = router;