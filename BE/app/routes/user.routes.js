// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.post('/users', userController.addUser);

router.put('/users/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);

module.exports = router;
