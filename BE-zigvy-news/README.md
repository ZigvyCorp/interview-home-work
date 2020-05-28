# Zigvy Technical Assignment Interview

  ### Sample users data:
```sh
    username: dinhhai | flappybird | angrybird | birdman | happydog
    password: 1
```

## Backend (BE-zigvy-news)

-   NodeJS - Express
    
-   MongoDB
    

  

## Frontend (FE-zigvy-news)

-   ReactJS - Redux
    
-   AntDesign/Bootstrap
    
-   Firebase
    
## Version

> node 12.16.1
> npm 6.13.4

  

- Run app (Backend first - Frontend second):

```sh

npm install

npm start

```
  **BE:** http://localhost:3000
  **FE:** http://localhost:3001
  
### Summary of Features:

 - [x] Sign in, Sign up
    
 - [x] Edit Profile (Upload image)
    
 - [x] CRUD Posts (Use Rich text format)
    
 - [x] CRUD Comments
    
 - [x] Search post title, content, tags (Full Text Search)
    
 - [x] Pagination posts, comments

### API:

> URL: http://localhost:3000
 - **Index:**
	- **GET** /
	- **GET** /profile
 - **User:**
	- **GET** /user
	- **POST** /user/login
	- **PUT** /user/register 
	- **POST** /user/update
	- **DELETE** /user/delete
- **Post:**
	- **POST** /post
	- **GET** /post/:id
	- **PUT** /post/create 
	- **POST** /post/update
	- **DELETE** /post/delete
- **Comment:**
	- **GET** /comment/:idPost/post
	- **PUT** /comment/create 
	- **POST** /comment/update
	- **DELETE** /comment/delete


