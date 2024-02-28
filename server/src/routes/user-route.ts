import { Router } from "express";
import UserController from "../controllers/user-controller";
import AuthenMiddleware from "../middlewares/authen-middleware";

const router = Router();

router.post('/sign-up',UserController.createUser);
router.post('/login',UserController.loginUser);
router.post('/refresh-access-token',UserController.refreshAccessToken);
router.get('/:token', UserController.getUserByToken)


export default router;