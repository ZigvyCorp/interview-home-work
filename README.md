RESTful API developed for front-end using  

Technologies:
- NodeJS
- ExpressJS
- MongoDB (mongoose)

BASE_URL: https://zigvy-be.onrender.com

- Post Route:
+ GET: /post/all => get all post
+ POST: /post => add new post
sample data: {
    "owner": "654c9457e3edd10c13aef8b6",
    "title": "Test Post",
    "content": "Odio",
    "created_at": 1576506719083,
    "tags":[]
}
+ GET: /post/:slug => get detail post
+ GET: /post/search/query?q=building => search post
+ PUT: /post/:id => update post
 sample data: { "title": "new Title" }
+ DELETE: /post/delete/:id => delete post

- User Route:
+ GET: /user/all => get all user
+ POST: /user => add new user
+ GET: /user/:id => get detail user
+ PUT: /user/:id => update user
sample data: { "name": "new name" }
+ DELETE: /user/delete/:id => delete user

- Comment Route:
+ GET: /comment/all => get all comment
+ POST: /comment => add new comment
+ DELETE: /comment/delete/:id => delete comment
