# Started this project

This Api Server run at [https://api-server-kbi8.onrender.com](https://api-server-kbi8.onrender.com).

**User**:

# Get list user:

Get - [https://api-server-kbi8.onrender.com/user]

# Get User Detail By Id:

Example - userId: 654bc09be26ca5920fbc7efe
Get - [https://api-server-kbi8.onrender.com/user/654bc09be26ca5920fbc7efe]

# Create User:

Post - [https://api-server-kbi8.onrender.com/user/register] + body
{"username":"", "password":"", "name":"","dob":""}

# Login User:

Post - [https://api-server-kbi8.onrender.com/user/login] + body
{"username":"Ronaldo123", "password":"12345"}

**Post**:

# Get List Post:

Get - [https://api-server-kbi8.onrender.com/post]

# Get Post Detail:

Example - postId: 654c465298f704c2c88c5b15
Get - [https://api-server-kbi8.onrender.com/post/654c465298f704c2c88c5b15]

**Comment**:

# Get List Comment:

Get - [https://api-server-kbi8.onrender.com/comment]

# Comment to Post:
- postId: 654c465298f704c2c88c5b15
- userId: 654bc09be26ca5920fbc7efe
  Post - [https://api-server-kbi8.onrender.com/comment/654c465298f704c2c88c5b15] + body
  {
  "user":"654bc09be26ca5920fbc7efe",
  "content":".........",
  }
