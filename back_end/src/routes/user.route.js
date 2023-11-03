const express = require('express');
const { getAllUsers } = require('../controllers/user.controller');

const routes = express.Router();

routes.get('/', getAllUsers);

module.exports = routes;
