const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.route('/login').get(userController.findByEmail);
router.route('/registry').post(userController.create);

module.exports = router;
