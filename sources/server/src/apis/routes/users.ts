import Router from 'express';
import { checkJwt, checkRole, validate } from '../../middlewares';

import { userControllers } from '../controllers';
import {
    createUserSchema,
    deleteUserSchema,
    getPostsByUserSchema,
    updateUserSchema,
} from '../validators/user.validation';

const router = Router();

router.get('/', checkJwt, userControllers.getUsers); // Oke
router.get('/:userID/posts', checkJwt, validate(getPostsByUserSchema), userControllers.getPostsByUser); // Oke
router.post('/', checkJwt, validate(createUserSchema), userControllers.createUser); // Oke
router.put('/:userID', checkJwt, validate(updateUserSchema), userControllers.updateUser); // Oke
router.delete('/:userID', checkJwt, validate(deleteUserSchema), userControllers.deleteUser); // Oke

export default router;
