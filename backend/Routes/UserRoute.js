const express = require('express');
const {
  getUser,
  updateUser,
  createUser,
  deleteUser,
  getAllUser,
} = require('../Controllers/UserController');

const router = express.Router();

router.get('/:id', getUser);
router.post('/', createUser);
router.get('/', getAllUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
