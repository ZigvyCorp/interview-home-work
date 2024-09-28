const express = require('express');
const router = express.Router();
const {getUsers, getUserById, createUser, updateUser, deleteUser, loginUser} = require('../controllers/userController');

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post('/login', loginUser);

module.exports = router;
