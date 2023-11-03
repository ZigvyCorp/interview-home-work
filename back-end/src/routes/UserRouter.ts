import express from 'express';
import UserController from 'src/controllers/UserController';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.delete('/', UserController.deleteUser);
router.put('/', UserController.updateUser);
router.get('/', UserController.getAllUsers);

export default router;
