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
