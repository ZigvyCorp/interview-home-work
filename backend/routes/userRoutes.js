const express = require('express');

const authController = require('./../controllers/authController');

const router = express.Router();
router.get('/me', authController.protect, authController.getUserInfo);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.protect, authController.logout);

module.exports = router;
