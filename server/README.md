# Started this project

This Api Backend Server run at [https://api-project-server.vercel.app](https://api-project-server.vercel.app).

**User**:

# Get list user:

Get - [https://api-project-server.vercel.app/user]

# Get User Detail By Id:

Example - userId: 654bc09be26ca5920fbc7efe
Get - [https://api-project-server.vercel.app/user/654bc09be26ca5920fbc7efe]

# Create User:

Post - [https://api-project-server.vercel.app/user/register] + body
{"username":"", "password":"", "name":"","dob":""}

# Login User:

Post - [https://api-project-server.vercel.app/user/login] + body
{"username":"Ronaldo123", "password":"12345"}

**Post**:

# Get List Post:

Get - [https://api-project-server.vercel.app/post]

# Get Post Detail:

Example - postId: 654c465298f704c2c88c5b15
Get - [https://api-project-server.vercel.app/post/654c465298f704c2c88c5b15]

**Comment**:

# Get List Comment:

Get - [https://api-project-server.vercel.app/comment]

# Comment to Post:
- postId: 654c465298f704c2c88c5b15
- userId: 654bc09be26ca5920fbc7efe
  Post - [https://api-project-server.vercel.app/comment/654c465298f704c2c88c5b15] + body
  {
  "user":"654bc09be26ca5920fbc7efe",
  "content":".........",
  }
