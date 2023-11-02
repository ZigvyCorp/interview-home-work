import express from 'express';
import { UsersController } from '../controllers/users.js';

const router = express.Router();
const usersController = new UsersController;

router.get("/", usersController.getAllUser);

export default router;