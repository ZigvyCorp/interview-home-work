const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!


// a simple test url to check that all of our files are communicating correctly.
router.get('', userController.findAllUser);
router.post('/create', userController.createUser);
module.exports = router;
