import UserRoutes from './userRoutes';
import PostRoutes from './postRoutes';
import CommentRoutes from './commentRoutes';
import ErrorRoutes from './errorRoutes';
import { USER, COMMENT, POST } from '../helpers/constants/Routes';

export default function configure(app) {
    // Other routes
    app.use(USER, UserRoutes);
    app.use(COMMENT, CommentRoutes);
    app.use(POST, PostRoutes);
    // Default error route
    app.use(ErrorRoutes);
}