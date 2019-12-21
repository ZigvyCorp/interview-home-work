const express = require('express');
const { isAuthenticated } = require('../../../middlewares/middlewares');
const UserSchema = require('../../../database/models/user');
const SessionRouter = express.Router();

SessionRouter.post('/login', (req, res) => {

});

SessionRouter.get('/logout', isAuthenticated, (req, res) => {

})

module.exports = SessionRouter;