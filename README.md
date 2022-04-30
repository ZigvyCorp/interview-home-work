# Zigvy Blogs

## APIS

#Auth
-   [POST] `/auth/login` : Login with username password (usename: guest1, password: guest1)
-   [POST] `/auth/register`: Register account 
-   [POST] `/auth/change-password`: Change password for account

#User
- [GET] `/posts` : Get all users
- [GET] `/posts/:postID/comments` : Get comments belong post
- [POST] `/posts` : Create posts
- [PUT] `/posts/:postID` : Update post
- [DELETE] `/posts/:postID` : Delete post

#Post
- [GET] `/posts` : Get all posts
- [GET] `/users/:userID/posts` : Get posts belong user
- [POST] `/users` : Create user
- [PUT] `/users/:userID` : Update user
- [DELETE] `/users/:userID` : Delete user
-   An a lot of things are in development...

#Comment
- [POST] `/comments` : Create comments
- [PUT] `/comments/:commentID` : Update comment
- [DELETE] `/comments/:commentID` : Delete comment
-
-   An a lot of things are in development... [Postman.js](https://www.postman.com/solar-sunset-765558/workspace/zigvy-blog)


## Installation

`Zigvy Blogs` is requires

-   [Node.js](https://nodejs.org/) v16+ to run.
-   [NPM](https://www.npmjs.com/) to install package.

Install the dependencies and devDependencies and start `Zigvy Blog`.

```sh
git clone https://github.com/hlphap/interview-home-work.git
npm i
npm run dev (for back-end)
npm start (for front-end)
```

## Use git command

-   `git branch <branch name> : ` To create branch
-   `git checkout <branch name> : ` To get code to new branch
-   `git switch <branch name>: ` To switch new branch
-   `git add . :` Add code written to git local
-   `git commit -m "<message>" : ` Commit code with message
-   `git push --set-upstream origin <branch name> : ` Push code with new branch
  

## Development

##### Want to contribute? Great! Fork me and create a Pull Request
