import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import initWebRoutes from './route';
import { UserService, PostService, CommentService } from './service';
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

initWebRoutes(app);

const fetchData = () => {
    const fetchUsers = fetch(`${process.env.MOCK_API}/users`);
    const fetchPosts = fetch(`${process.env.MOCK_API}/posts`);
    const fetchComments = fetch(`${process.env.MOCK_API}/comments`);
    Promise.all([fetchUsers, fetchPosts, fetchComments])
        .then(([usersResponse, postsResponse, commentsResponse]) => {
            return Promise.all([usersResponse.json(), postsResponse.json(), commentsResponse.json()]);
        })
        .then(([users, posts, comments]) => {
            UserService.fetchUsers(users);
            PostService.fetchPosts(posts);
            CommentService.fetchComments(comments);
        })
        .catch(error => {
            console.error({ error });
        });
};

fetchData();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
