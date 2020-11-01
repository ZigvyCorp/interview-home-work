import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
// import * as UserController from '../controllers/user.controller';
// import * as CommentController from '../controllers/comment.controller';

const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by id
router.route('/posts/:_id').get(PostController.getPostDetail);

// Add a new Post
router.route('/post').post(PostController.addPost);

router.route('/search').get(PostController.search);

//get all users
// router.route('/users').get(UserController.getUsers);

// router.route('/:_id/comment').post(CommentController.addComment);


export default router;
