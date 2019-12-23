Note:
- Follow this guide to install bcrypt on windows: https://stackoverflow.com/a/40046466

Endpoints:
- Register a new user:
    - POST /api/users
    - Body example: { username: 'user1', password: 'password1'}

- Login:
    - POST /api/sessions/login
    - Body example: { username: 'user1', password: 'password1'}
- Logout:
    - GET /api/sessions/logout
    - Headers example: { key: Authentication, value: TOKEN}

- Create a new post:
    - POST /api/posts
    - Body example: { "title": "The very first post", "content": "Dummy content", "tags": ["funny", "LOL"] }
    - Headers example: { key: Authentication, value: TOKEN}
- Get posts by page and limit
    - GET /api/posts/?limit=LIMIT&page=PAGE
    - Example: http://localhost:8080/api/posts/?limit=3&page=2
- Get post by id:
    - GET /api/posts/:id
- Update post by id:
    - PUT /api/posts/:id
    - Body example: { "title": "The very first post", "content": "Dummy content", "tags": ["funny", "LOL"] }
    - Headers example: { key: Authentication, value: TOKEN}

- Create a new comment
    - POST /api/comments
    - Body example: { "postId": "5e00cbafa8f83815500c5e13", "content": "The first comment" }
    - Headers example: { key: Authentication, value: TOKEN}
  
- Get comments by postId
    - GET /api/comments/:postid
- Update comments by commentId
    - PUT /api/comments/:commentId
    - Body example: { "content": "updated content" }
    - Headers example: { key: Authentication, value: TOKEN}


