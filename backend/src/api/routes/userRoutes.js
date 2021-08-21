const router = require('express').Router();
import { UserController } from '../controllers';

router.get('', UserController.getUsers);

router.post('', UserController.addUser);

export default router;