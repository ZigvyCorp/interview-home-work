const express = require('express');
const { getAllComments } = require('../controllers/comment.controller');

const routes = express.Router();

routes.get('/', getAllComments);

module.exports = routes;
