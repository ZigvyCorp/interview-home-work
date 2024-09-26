import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';

// Define routes for Users
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUser);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

// Export router
export default router;