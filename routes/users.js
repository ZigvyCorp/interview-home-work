var express = require('express');
var router = express.Router();
var userController = require('../server/controllers/userController');
var authController = require('../server/controllers/authController');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    var user = await authController.authencationGate(req.session.token);
    res.render('client/homePage', { title: 'User Page', authencation: true, user: user });
  } catch {
    res.render('client/homePage', { title: 'User Page', authencation: false, user: '' });
  }
});

router.get('/signin', async function(req, res, next) {
  try {
    await authController.authencationGate(req.session.token);
    res.redirect('/');
  } catch {
    res.render('client/loginPage', { title: 'Login Page', authencation: false, user: '' });
  }
});

router.get('/signup', async function(req, res, next) {
  try {
    await authController.authencationGate(req.session.token);
    res.redirect('/');
  } catch {
    res.render('client/registerPage', { title: 'Register Page', authencation: false, user: '' });
  }
});

// LOGIN
router.post('/api/login', async function(req, res, next) {
  try {
    console.log(req.body)
    let response = await userController.authencation(req.body);
    if (response.token) {
      console.log(response.token);
      req.session.token = response.token;
      delete response.token;
    }
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get('/api/logout', async function(req, res, next) {
  try {
    delete req.session.token
    res.redirect('/')
  } catch {
    console.log(error);
    res.redirect('/')
  }
});

// USER API
router.post('/api/user', async function(req, res, next) {
  try {
    let response = await userController.createNewUser(req.body);
    if (response.token) {
      console.log(response.token);
      req.session.token = response.token;
      delete response.token
    }
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;

