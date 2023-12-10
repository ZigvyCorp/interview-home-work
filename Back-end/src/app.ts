import { config } from 'dotenv';
import express, { Application } from 'express';
import corsConfig from './configs/cors.config';
import mongoConnect from './configs/mongo.config';
import { UserRoute } from './modules/user-module/user.route';
import { BlogRoute } from './modules/blog-module/blog.route';
import { CommentRoute } from './modules/comment-model/comment.route';

config();

const app: Application = express();
const port = process.env.PORT || 8000;

mongoConnect;
app.use(
        corsConfig,
        express.json(),
        express.urlencoded({
            extended: true
        }),
    );

app.use('/user', UserRoute)
app.use('/blog', BlogRoute)
app.use('/comment', CommentRoute)

app.listen(port, () => { console.log(`Server is running at http://localhost:${port}`); });