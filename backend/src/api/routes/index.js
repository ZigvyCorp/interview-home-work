import UserRoutes from './userRoutes';
import PostRoutes from './postRoutes';
import CommentRoutes from './commentRoutes';
import { USER, COMMENT, POST } from '../helpers/constants/Routes';

export default function configure(app) {
    app.use(USER, UserRoutes);
    app.use(COMMENT, CommentRoutes);
    app.use(POST, PostRoutes);
}