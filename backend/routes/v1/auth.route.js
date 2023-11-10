const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const authController = require('../../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', auth, authController.getMe);

module.exports = router;