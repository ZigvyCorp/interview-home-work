var express = require('express');
var router = express.Router();
var userController = require('../server/controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('client/homePage', { title: 'User Page' });
});

router.get('/signin', function(req, res, next) {
  res.render('client/loginPage', { title: 'Login Page' });
});

router.get('/signup', function(req, res, next) {
  res.render('client/registerPage', { title: 'Register Page' });
});

// USER API
router.post('/api/user', async function(req, res, next) {
  try {
    console.log(req.body);
    let response = await userController.createNewUser(req.body);
    res.send(response); 
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;

