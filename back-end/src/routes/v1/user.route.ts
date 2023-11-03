// const authController = require('../../controllers/auth.controller');
import express from 'express';
import { userController } from '../../controllers';

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);

export default router;
