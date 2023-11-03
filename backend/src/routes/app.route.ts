import { Express } from 'express';
import commentRoutes from '~/features/comments/comment.route';
import postRoutes from '~/features/posts/post.route';
import searchRoutes from '~/features/search/search.route';

const appRoutes = (app: Express) => {
    app.use('/api/v1/posts', postRoutes);
    app.use('/api/v1/search', searchRoutes);
    app.use('/api/v1/comments', commentRoutes);
};

export default appRoutes;
