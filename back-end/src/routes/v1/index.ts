import express from 'express';
import blogRoute from './blog.route';
import userRoute from './user.route';
import commentRoute from './comments.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/blog',
    route: blogRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/comment',
    route: commentRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
