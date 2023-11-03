# Back-End Documentation

A list contain of tasks done on Back-End

## Tasks

- All EXTERNAL-APIs must be called from Back-end sidePost APIs (Done)
- Server Structure must be MCV (per module) and well structured (Done)

## API documentation

### Post

Get all posts: /api/posts
Search posts: /api/posts/search
Get comments by post: /api/posts/:postId/comments
Get post: /api/posts/:postId
Create post: /api/posts/create
Update post: /api/posts/update/:postId
Delete post: /api/posts/delete/:postId

### Comment

Get all comments: /api/comments
Get comment: /api/comments/:commentId
Create comment: /api/comments/create
Update comment: /api/comments/update/:commentId
Delete comment: /api/comments/delete/:commentId

### User

Get all users: /api/users
Get user: /api/users/:commentId
Create user: /api/users/create
Update user: /api/users/update/:userId
Delete user: /api/users/delete/:userId
