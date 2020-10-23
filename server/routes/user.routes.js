const UserCtrl = require('../controller/user.ctrl');
const Router = require('express').Router();

// POST => /api/user/signup
Router.post('/signup', UserCtrl.add);
// POST => /api/user/signin
Router.post('/signin', UserCtrl.login);
// PUT => /api/user/update/id
Router.put('/update/:id',UserCtrl.update);

module.exports = Router;