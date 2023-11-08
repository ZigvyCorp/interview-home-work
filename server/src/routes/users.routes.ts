import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/register', (req, res, next) => {
  res.status(200).json({
    message: 'Hello, my name is Trieu'
  });
});

export default usersRouter;
