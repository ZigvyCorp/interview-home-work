import UserRoutes from './userRoutes';
// import PostRoutes from './postRoutes';
// import CommentRoutes from './commentRoutes';
import { USER } from '../helpers/constants/Routes';

export default function configure(app) {
    app.use(USER, UserRoutes);
}