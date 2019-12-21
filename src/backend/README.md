Current working:

- Error handler for methods in session model
- Add authentication middleware
- Add handlers for endpoint
- Test API


Note:
- Follow this guide to install bcrypt on windows: https://stackoverflow.com/a/40046466

Endpoints:
- Register a new user: 
    POST /api/users
    Body example: { username: 'user1', password: 'password1'}
- Login:
    POST /api/sessions/login
    Body example: { username: 'user1', password: 'password1'}
- Logout:
    GET /api/sessions/logout
    Headers example: { key: Authentication, value: TOKEN}

- Create a new post:
    POST /api/posts
    Body example: { "title": "The very first post", "content": "Dummy content", "tags": ["funny", "LOL"] }
    Headers example: { key: Authentication, value: TOKEN}
- Get post by id:
    GET /api/posts/:id
- Update post by id:
    PUT /api/posts/:id
    Body example: { "title": "The very first post", "content": "Dummy content", "tags": ["funny", "LOL"] }
    Headers example: { key: Authentication, value: TOKEN}

