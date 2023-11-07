import userRouter from './UserRoutes.js';
import { notFound, errorHandler } from '../Middleware/Errors.js';

const routes = (app) => {
    app.get('/', (req, res) => {
        try {
            res.json('Hello World');
        } catch (error) {
            console.log('error', error);
        }
    });
    app.use('/api/users', userRouter);
    app.use(notFound);
    app.use(errorHandler);
};
export default routes;
