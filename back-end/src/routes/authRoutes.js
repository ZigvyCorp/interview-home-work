const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile } = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signin', logout);
router.get('/me', isAuthenticated, userProfile);

module.exports = router;
