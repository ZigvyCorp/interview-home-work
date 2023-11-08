import { Router } from 'express';

import { registerController } from '~/controllers/users.controllers';
import { registerValidator } from '~/middlewares/users.middlewares';
import { RegisterReqBody } from '~/models/requests/User.requests';
import { filterReqBodyMiddleware, wrapRequestHandler } from '~/utils/handlers';

const usersRouter = Router();

usersRouter.post(
  '/register',
  registerValidator,
  filterReqBodyMiddleware<RegisterReqBody>(['email', 'password']),
  wrapRequestHandler(registerController)
);

export default usersRouter;
