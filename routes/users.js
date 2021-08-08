const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


router.post('/create', userController.create);
router.get('/signin', userController.signin);
router.get('/infobyid/:id',userController.infobyid);

module.exports = router;
