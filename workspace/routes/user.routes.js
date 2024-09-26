import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  patchUserById,
  deleteUserById
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUserById);
router.patch('/:id', patchUserById);
router.delete('/:id', deleteUserById);

export default router;
