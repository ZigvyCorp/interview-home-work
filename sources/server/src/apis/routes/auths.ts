import express from 'express';
import { checkJwt, validate } from '../../middlewares';
import { loginSchema, registerSchema, changePasswordSchema } from '../validators/auth.validation';
import { authControllers } from '../controllers';

const router = express.Router();

router.post('/login', [validate(loginSchema)], authControllers.login); // Oke
router.post('/register', [validate(registerSchema)], authControllers.register); // Oke
router.post('/change-password', [checkJwt, validate(changePasswordSchema)], authControllers.changePassword); // Oke
router.post('/verify', checkJwt, authControllers.verifyJwt);

export default router;
