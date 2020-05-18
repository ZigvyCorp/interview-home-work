import { Router } from 'express';
import AuthRouter from './Auth';
import UserRouter from './Users';
import PostRouter from './Posts';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/v1/auth', AuthRouter);
router.use('/v1/users', UserRouter);
router.use('/v1/posts', PostRouter);

// Export the base-router
export default router;
