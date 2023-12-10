# Features and setup project

## Feature
  - User
    - Login
    - Get suggest user
  - Post
    - Get post (infinity scroll)
    - Create post
    - Search post
  - Comment
    - Get comment by post
    - Create comment

## Set up
## Frontend
  - npm install => npm start

## Backend
  - Run this command: **npm install**
  - Using Posgres
  - Create databse and change information in **Backend/config/config.json** according to what you created
  - Run this command in terminal: **npx sequelize-cli db:migrate**
  - Insert data to datababse: The data will be contained in **Backend/document/data**
  - Run this command: **npm start**
  - Password for all user: 123 