## General

- Sau khi chạy được backend thì mở `${BASE_URL}/v1/api/docs` chạy api tạo user trước ---> login ---> tạo bài viết để có data test

## Technologies Used

- Frontend:
  - Framework: ReactJS
  - Routing: React Router DOM
  - Styling: TailwindCSS, Ant Design (Antd)
  - State Management: React Query
  - HTTP Client: Axios
- Backend:
  - NestJS
- Database:
  - PostgreSQL

## Frontend Features

    - Login: Users can log in to access the application.
    - Homepage
      - Displays a list of posts.
      - Includes search functionality to filter posts by title.
      - Supports pagination.
    - Post Details Page
      - Displays detailed information about a specific post.
      - Shows comments on the post with pagination.
      - Allows users to add comments to the post.

## Backend Features

    - User Management:
      - Create a new user.
      - User login functionality.
    - Post Management:
      - Create posts.
      - List all posts with pagination.
      - Retrieve detailed information about a specific post.
      - Update a post (only if the post was created by the logged-in user).
      - Delete a post (only if the post was created by the logged-in user).
    - Comment Management:
      - Add comments to a post
      - List all comments for a specific post with pagination.
      - Retrieve detailed information about a specific comment.
      - Update a comment (only if the comment was created by the logged-in user).
      - Delete a comment (only if the comment was created by the logged-in user).

## Run Backend

- Install the tool to run PostgreSQL (if not already installed).
- Create a database named `blog-zigvy`.
- Run the SQL script to create the tables located in the `api/src/db` folder.
- Navigate to the `api` directory.
- Create a `.env` file with the variables from the `.env.example` file.
  - **Note**: In the `.env` file, make sure to update the `DB_URL` variable with your local PostgreSQL connection details:
    ```
    DB_URL=postgresql://${username}:${password}@localhost:5432/blog-zigvy?schema=public
    ```
    Ensure that the database URL matches your local setup.
- Run the command: `yarn` or `npm install`.
- After installing the necessary libraries, run the command: `yarn start:dev`.
- After successfully running the backend, access `${BASE_URL}/v1/api/docs` to view the backend documentation.

## Run Frontend

- Navigate to the `client` directory.
- Create a `.env` file with the variables from the `.env.example` file.
- Run the command: `yarn` or `npm install`.
- After installing the necessary libraries, run the command: `yarn dev`.
