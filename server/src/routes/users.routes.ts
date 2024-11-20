import { Router } from 'express';

import {
  loginController,
  logoutController,
  refreshTokenController,
  registerController
} from '~/controllers/users.controllers';
import { loginValidator, refreshTokenValidator, registerValidator } from '~/middlewares/users.middlewares';
import { RegisterReqBody } from '~/models/requests/User.requests';
import { filterReqBodyMiddleware, wrapRequestHandler } from '~/utils/handlers';

const usersRouter = Router();

// Đăng ký
usersRouter.post(
  '/register',
  registerValidator,
  filterReqBodyMiddleware<RegisterReqBody>(['email', 'password']),
  wrapRequestHandler(registerController)
);

// Đăng nhập
usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController));

// Đăng xuất
usersRouter.post('/logout', refreshTokenValidator, wrapRequestHandler(logoutController));

// Refresh token
usersRouter.post('/refresh-token', refreshTokenValidator, wrapRequestHandler(refreshTokenController));

export default usersRouter;
